<?php

namespace Tests\Feature;

use App\Models\Fecha;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class AdminTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->withoutVite();
    }

    public function test_invitado_es_redirigido_al_login(): void
    {
        $this->get('/admin')->assertRedirect('/admin/login');
        $this->get('/admin/fechas')->assertRedirect('/admin/login');
        $this->get('/admin/usuarios')->assertRedirect('/admin/login');
    }

    public function test_login_correcto_e_incorrecto(): void
    {
        $usuario = User::factory()->create(['password' => 'clave-segura']);

        $this->post('/admin/login', ['email' => $usuario->email, 'password' => 'otra'])
            ->assertSessionHasErrors('email');
        $this->assertGuest();

        $this->post('/admin/login', ['email' => $usuario->email, 'password' => 'clave-segura'])
            ->assertRedirect('/admin/fechas');
        $this->assertAuthenticatedAs($usuario);
    }

    public function test_seeder_crea_el_usuario_inicial_sin_pisarlo(): void
    {
        config(['admin.usuario_inicial' => ['name' => 'Andy', 'email' => 'andy@example.com', 'password' => 'inicial123']]);

        $this->seed();
        $usuario = User::where('email', 'andy@example.com')->firstOrFail();
        $this->assertTrue(Hash::check('inicial123', $usuario->password));

        $usuario->update(['password' => 'cambiada123']);
        $this->seed();
        $this->assertTrue(Hash::check('cambiada123', $usuario->fresh()->password));
    }

    public function test_listado_de_fechas(): void
    {
        Fecha::factory()->create(['orden' => 1, 'titulo' => 'Taller Pan']);

        $this->actingAs(User::factory()->create())
            ->get('/admin/fechas')
            ->assertOk()
            ->assertSee('Taller Pan')
            ->assertSee('noindex', false);
    }

    public function test_actualiza_una_fecha_con_imagen(): void
    {
        $fecha = Fecha::factory()->create(['orden' => 2]);
        $antes = $fecha->updated_at;
        $this->travel(1)->minutes();

        $this->actingAs(User::factory()->create())
            ->put('/admin/fechas/2', [
                'titulo' => 'Nuevo título',
                'subtitulo' => '',
                'bajada' => 'Artes visuales.',
                'descripcion' => 'Texto',
                'fecha' => '2026-12-01',
                'color' => 'bgTGreen',
                'url' => 'https://senal.evently.cl/evento',
                'foto' => UploadedFile::fake()->image('foto.png', 10, 10),
            ])
            ->assertRedirect('/admin/fechas');

        $fecha = Fecha::where('orden', 2)->first();
        $this->assertSame('Nuevo título', $fecha->titulo);
        $this->assertSame('', $fecha->subtitulo);
        $this->assertSame('2026-12-01', $fecha->fecha->format('Y-m-d'));
        $this->assertSame('bgTGreen', $fecha->color);
        $this->assertNotEmpty($fecha->foto);
        $this->assertTrue($fecha->updated_at->gt($antes));
    }

    public function test_crea_un_bloque_que_no_existia(): void
    {
        $this->actingAs(User::factory()->create())
            ->put('/admin/fechas/3', [
                'titulo' => 'Bloque nuevo',
                'fecha' => '2026-12-01',
                'color' => 'bgTPink',
            ])
            ->assertRedirect('/admin/fechas');

        $this->assertDatabaseHas('fechas', ['orden' => 3, 'titulo' => 'Bloque nuevo', 'url' => '']);
    }

    public function test_valida_los_campos_de_la_fecha(): void
    {
        $this->actingAs(User::factory()->create())
            ->put('/admin/fechas/1', ['titulo' => '', 'fecha' => 'no', 'color' => 'azul', 'url' => 'nada'])
            ->assertSessionHasErrors(['titulo', 'fecha', 'color', 'url']);
    }

    public function test_solo_existen_los_bloques_1_a_3(): void
    {
        $this->actingAs(User::factory()->create())
            ->get('/admin/fechas/4/editar')
            ->assertNotFound();
    }

    public function test_reordena_los_bloques(): void
    {
        Fecha::factory()->create(['orden' => 1, 'titulo' => 'A']);
        Fecha::factory()->create(['orden' => 2, 'titulo' => 'B']);
        Fecha::factory()->create(['orden' => 3, 'titulo' => 'C']);

        $this->actingAs(User::factory()->create())
            ->putJson('/admin/fechas/orden', ['orden' => [3, 1, 2]])
            ->assertOk()
            ->assertJsonPath('success', true);

        $this->assertSame(
            ['C', 'A', 'B'],
            Fecha::orderBy('orden')->pluck('titulo')->all(),
        );
    }

    public function test_reordenar_mueve_tambien_un_bloque_vacio(): void
    {
        Fecha::factory()->create(['orden' => 1, 'titulo' => 'A']);
        Fecha::factory()->create(['orden' => 3, 'titulo' => 'C']);

        // El vacío (2) pasa al final: A queda en 1 y C sube a 2.
        $this->actingAs(User::factory()->create())
            ->putJson('/admin/fechas/orden', ['orden' => [1, 3, 2]])
            ->assertOk();

        $this->assertSame(
            [1 => 'A', 2 => 'C'],
            Fecha::orderBy('orden')->pluck('titulo', 'orden')->all(),
        );
    }

    public function test_reordenar_rechaza_entradas_invalidas(): void
    {
        Fecha::factory()->create(['orden' => 1, 'titulo' => 'A']);
        $this->actingAs(User::factory()->create());

        $this->putJson('/admin/fechas/orden', ['orden' => [1, 1, 2]])->assertUnprocessable();
        $this->putJson('/admin/fechas/orden', ['orden' => [1, 2]])->assertUnprocessable();
        $this->putJson('/admin/fechas/orden', ['orden' => [1, 2, 4]])->assertUnprocessable();

        $this->assertDatabaseHas('fechas', ['orden' => 1, 'titulo' => 'A']);
    }

    public function test_reordenar_requiere_sesion(): void
    {
        $this->putJson('/admin/fechas/orden', ['orden' => [3, 2, 1]])->assertUnauthorized();
    }

    public function test_crud_de_usuarios(): void
    {
        $yo = User::factory()->create();
        $this->actingAs($yo);

        $this->post('/admin/usuarios', [
            'name' => 'Nueva',
            'email' => 'nueva@example.com',
            'password' => 'clave1234',
            'password_confirmation' => 'clave1234',
        ])->assertRedirect('/admin/usuarios');

        $nueva = User::where('email', 'nueva@example.com')->firstOrFail();
        $this->assertTrue(Hash::check('clave1234', $nueva->password));

        // Clave vacía mantiene la actual
        $this->put("/admin/usuarios/{$nueva->id}", [
            'name' => 'Nueva Editada',
            'email' => 'nueva@example.com',
            'password' => '',
            'password_confirmation' => '',
        ])->assertRedirect('/admin/usuarios');
        $this->assertSame('Nueva Editada', $nueva->fresh()->name);
        $this->assertTrue(Hash::check('clave1234', $nueva->fresh()->password));

        $this->delete("/admin/usuarios/{$nueva->id}")->assertRedirect('/admin/usuarios');
        $this->assertModelMissing($nueva);
    }

    public function test_no_puede_eliminarse_a_si_mismo(): void
    {
        $yo = User::factory()->create();

        $this->actingAs($yo)
            ->from('/admin/usuarios')
            ->delete("/admin/usuarios/{$yo->id}")
            ->assertSessionHasErrors('usuario');

        $this->assertModelExists($yo);
    }

    public function test_email_duplicado_y_clave_corta(): void
    {
        $yo = User::factory()->create();

        $this->actingAs($yo)
            ->post('/admin/usuarios', [
                'name' => 'X',
                'email' => $yo->email,
                'password' => '123',
                'password_confirmation' => '123',
            ])
            ->assertSessionHasErrors(['email', 'password']);
    }
}
