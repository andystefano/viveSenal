<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Bloque de "Próximas Señales" que muestra la portada.
 * La imagen se guarda como BLOB en la columna `foto`.
 */
class Fecha extends Model
{
    use HasFactory;

    /** Posiciones que muestra la portada (Section3). */
    public const BLOQUES = [1, 2, 3];

    /** Clases CSS de fondo disponibles en el front (App.css). */
    public const COLORES = [
        'bgTPink' => 'Rosado',
        'bgTRed' => 'Rojo',
        'bgTGreen' => 'Verde',
        'bgTGray' => 'Gris',
    ];

    public const CREATED_AT = 'fecha_creacion';

    protected $table = 'fechas';

    protected $fillable = [
        'orden',
        'titulo',
        'subtitulo',
        'bajada',
        'descripcion',
        'fecha',
        'color',
        'url',
    ];

    protected $hidden = ['foto'];

    protected function casts(): array
    {
        return [
            'orden' => 'integer',
            'fecha' => 'date',
        ];
    }

    /** Todas las columnas menos el BLOB, para listados. */
    public function scopeSinFoto(Builder $query): void
    {
        $query->select('id', 'orden', 'titulo', 'subtitulo', 'bajada', 'descripcion', 'fecha', 'color', 'url', 'fecha_creacion', 'updated_at')
            ->selectRaw('foto IS NOT NULL AS tiene_foto');
    }

    public function urlImagen(): string
    {
        return route('api.fechas.imagen', [
            'orden' => $this->orden,
            'v' => $this->updated_at?->timestamp,
        ], absolute: false);
    }
}
