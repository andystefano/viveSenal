<?php

use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\FechaController;
use App\Http\Controllers\Admin\UsuarioController;
use Illuminate\Support\Facades\Route;

// Sitio público (React)
Route::view('/', 'app')->name('home');

// Backoffice: no se enlaza desde ningún menú del sitio.
Route::prefix('admin')->name('admin.')->group(function () {
    Route::middleware('guest')->group(function () {
        Route::get('login', [AuthController::class, 'create'])->name('login');
        Route::post('login', [AuthController::class, 'store'])->middleware('throttle:10,1');
    });

    Route::middleware('auth')->group(function () {
        Route::post('logout', [AuthController::class, 'destroy'])->name('logout');

        Route::redirect('/', '/admin/fechas')->name('home');

        Route::get('fechas', [FechaController::class, 'index'])->name('fechas.index');
        Route::put('fechas/orden', [FechaController::class, 'reordenar'])->name('fechas.reordenar');
        Route::get('fechas/{orden}/editar', [FechaController::class, 'edit'])->whereIn('orden', ['1', '2', '3'])->name('fechas.edit');
        Route::put('fechas/{orden}', [FechaController::class, 'update'])->whereIn('orden', ['1', '2', '3'])->name('fechas.update');

        Route::resource('usuarios', UsuarioController::class)
            ->except('show')
            ->parameters(['usuarios' => 'usuario']);
    });
});
