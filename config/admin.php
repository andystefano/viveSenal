<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Usuario inicial del administrador (/admin)
    |--------------------------------------------------------------------------
    |
    | Lo crea `php artisan db:seed` solo si no existe un usuario con ese email.
    | Los demás usuarios se gestionan desde /admin/usuarios.
    |
    */

    'usuario_inicial' => [
        'name' => env('ADMIN_NAME', 'Administrador'),
        'email' => env('ADMIN_EMAIL'),
        'password' => env('ADMIN_PASSWORD'),
    ],

];
