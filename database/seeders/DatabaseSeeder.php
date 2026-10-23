<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Crea el usuario inicial del admin definido en .env (ADMIN_EMAIL / ADMIN_PASSWORD).
     * Si ya existe no se modifica, para no pisar una clave cambiada desde el admin.
     */
    public function run(): void
    {
        $inicial = config('admin.usuario_inicial');

        if (empty($inicial['email']) || empty($inicial['password'])) {
            $this->command?->warn('ADMIN_EMAIL / ADMIN_PASSWORD no definidos en .env: no se creó el usuario inicial.');

            return;
        }

        $usuario = User::firstOrCreate(
            ['email' => $inicial['email']],
            ['name' => $inicial['name'], 'password' => $inicial['password']],
        );

        $this->command?->info($usuario->wasRecentlyCreated
            ? "Usuario inicial creado: {$usuario->email}"
            : "El usuario {$usuario->email} ya existía; no se modificó.");
    }
}
