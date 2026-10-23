<?php

namespace Tests\Feature;

use App\Models\Fecha;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class SitioPublicoTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->withoutVite();
    }

    public function test_la_portada_carga_la_app_react(): void
    {
        $this->get('/')
            ->assertOk()
            ->assertSee('<div id="root"></div>', false)
            ->assertDontSee('/admin');
    }

    public function test_api_devuelve_la_fecha_en_el_formato_que_usa_section3(): void
    {
        $fecha = Fecha::factory()->create(['orden' => 1, 'color' => 'bgTRed', 'fecha' => '2026-11-25']);
        $fecha->foto = 'imagen';
        $fecha->save();

        $this->getJson('/api/fechas/1')
            ->assertOk()
            ->assertJsonPath('success', true)
            ->assertJsonPath('orden', 1)
            ->assertJsonPath('datos.titulo', $fecha->titulo)
            ->assertJsonPath('datos.fecha', '2026-11-25')
            ->assertJsonPath('datos.color', 'bgTRed')
            ->assertJsonPath('datos.url', $fecha->url)
            ->assertJsonPath('datos.imagen', $fecha->fresh()->urlImagen());
    }

    public function test_api_responde_404_si_no_existe_el_bloque(): void
    {
        $this->getJson('/api/fechas/2')
            ->assertNotFound()
            ->assertJsonPath('success', false)
            ->assertJsonPath('datos', null);
    }

    public function test_sirve_la_imagen_guardada_en_la_base_de_datos(): void
    {
        $png = base64_decode('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==');
        $fecha = Fecha::factory()->create(['orden' => 3]);
        $fecha->foto = $png;
        $fecha->save();

        $respuesta = $this->get('/api/fechas/3/imagen');

        $respuesta->assertOk()->assertHeader('Content-Type', 'image/png');
        $this->assertSame($png, $respuesta->getContent());
    }

    public function test_imagen_inexistente_da_404(): void
    {
        Fecha::factory()->create(['orden' => 1]);

        $this->get('/api/fechas/1/imagen')->assertNotFound();
    }
}
