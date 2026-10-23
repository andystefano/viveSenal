<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Fecha;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

/**
 * Reemplaza a ver_detalles_fecha.php y ver_imagen.php del admin anterior.
 * Mantiene el formato JSON { success, orden, datos } que consume Section3.
 */
class FechaController extends Controller
{
    public function show(int $orden): JsonResponse
    {
        $fecha = Fecha::sinFoto()->where('orden', $orden)->first();

        if (! $fecha) {
            return response()->json([
                'success' => false,
                'orden' => $orden,
                'mensaje' => 'No se encontraron datos para el orden especificado',
                'datos' => null,
            ], 404);
        }

        return response()->json([
            'success' => true,
            'orden' => $orden,
            'datos' => [
                'titulo' => $fecha->titulo ?? '',
                'subtitulo' => $fecha->subtitulo ?? '',
                'fecha' => $fecha->fecha?->format('Y-m-d') ?? '',
                'bajada' => $fecha->bajada ?? '',
                'descripcion' => $fecha->descripcion ?? '',
                'color' => $fecha->color ?? '',
                'url' => $fecha->url ?? '',
                'imagen' => $fecha->tiene_foto ? $fecha->urlImagen() : null,
            ],
        ], 200, [], JSON_UNESCAPED_UNICODE);
    }

    public function imagen(int $orden): Response
    {
        $foto = Fecha::where('orden', $orden)->value('foto');

        abort_if($foto === null || $foto === '', 404);

        $mime = (new \finfo(FILEINFO_MIME_TYPE))->buffer($foto);
        if (! $mime || ! str_starts_with($mime, 'image/')) {
            $mime = 'image/jpeg';
        }

        // La URL lleva ?v=<updated_at>, así que puede cachearse sin riesgo de quedar obsoleta.
        return response($foto, 200, [
            'Content-Type' => $mime,
            'Content-Length' => strlen($foto),
            'Cache-Control' => 'public, max-age=604800',
        ]);
    }
}
