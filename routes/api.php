<?php

use App\Http\Controllers\Api\FechaController;
use Illuminate\Support\Facades\Route;

Route::get('fechas/{orden}', [FechaController::class, 'show'])
    ->whereNumber('orden')
    ->name('api.fechas.show');

Route::get('fechas/{orden}/imagen', [FechaController::class, 'imagen'])
    ->whereNumber('orden')
    ->name('api.fechas.imagen');
