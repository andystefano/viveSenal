<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Fecha;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use Illuminate\View\View;

class FechaController extends Controller
{
    public function index(): View
    {
        $fechas = Fecha::sinFoto()
            ->whereIn('orden', Fecha::BLOQUES)
            ->get()
            ->keyBy('orden');

        return view('admin.fechas.index', [
            'bloques' => Fecha::BLOQUES,
            'fechas' => $fechas,
        ]);
    }

    /**
     * Recibe `orden` = posiciones actuales en el nuevo orden visual.
     * Ej. [3, 1, 2]: el bloque que estaba en 3 pasa a ser el 1, etc.
     */
    public function reordenar(Request $request): JsonResponse|RedirectResponse
    {
        $datos = $request->validate([
            'orden' => ['required', 'array', 'size:'.count(Fecha::BLOQUES)],
            'orden.*' => ['required', 'integer', 'distinct', Rule::in(Fecha::BLOQUES)],
        ]);

        // `orden` es UNIQUE: se pasa por valores negativos temporales para poder intercambiar.
        DB::transaction(function () use ($datos) {
            Fecha::whereIn('orden', Fecha::BLOQUES)->update(['orden' => DB::raw('-orden')]);

            foreach (array_values($datos['orden']) as $indice => $ordenAnterior) {
                Fecha::where('orden', -$ordenAnterior)->update(['orden' => Fecha::BLOQUES[$indice]]);
            }
        });

        $mensaje = 'Orden actualizado.';

        if ($request->expectsJson()) {
            session()->flash('status', $mensaje);

            return response()->json(['success' => true, 'message' => $mensaje]);
        }

        return redirect()->route('admin.fechas.index')->with('status', $mensaje);
    }

    public function edit(int $orden): View
    {
        $fecha = Fecha::sinFoto()->where('orden', $orden)->first()
            ?? new Fecha(['orden' => $orden, 'color' => 'bgTPink']);

        return view('admin.fechas.edit', [
            'fecha' => $fecha,
            'colores' => Fecha::COLORES,
        ]);
    }

    public function update(Request $request, int $orden): RedirectResponse
    {
        $datos = $request->validate([
            'titulo' => ['required', 'string', 'max:255'],
            'subtitulo' => ['nullable', 'string', 'max:255'],
            'bajada' => ['nullable', 'string', 'max:255'],
            'descripcion' => ['nullable', 'string', 'max:5000'],
            'fecha' => ['required', 'date'],
            'color' => ['required', Rule::in(array_keys(Fecha::COLORES))],
            'url' => ['nullable', 'url', 'max:2048'],
            'foto' => ['nullable', 'image', 'mimes:jpg,jpeg,png,gif,webp', 'max:5120'],
        ]);

        $fecha = Fecha::firstOrNew(['orden' => $orden]);

        // Las columnas de texto son NOT NULL en la tabla original.
        $fecha->fill([
            'titulo' => $datos['titulo'],
            'subtitulo' => $datos['subtitulo'] ?? '',
            'bajada' => $datos['bajada'] ?? '',
            'descripcion' => $datos['descripcion'] ?? '',
            'fecha' => $datos['fecha'],
            'color' => $datos['color'],
            'url' => $datos['url'] ?? '',
        ]);

        if ($request->hasFile('foto')) {
            $fecha->foto = $request->file('foto')->get();
        }

        // Fuerza updated_at aunque solo cambie la imagen, porque versiona su URL.
        $fecha->updated_at = $fecha->freshTimestamp();
        $fecha->save();

        return redirect()
            ->route('admin.fechas.index')
            ->with('status', "Bloque {$orden} actualizado.");
    }
}
