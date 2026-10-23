@extends('admin.layout')

@section('title', "Bloque {$fecha->orden}")

@section('content')
    <div class="mb-6 flex items-center justify-between gap-4">
        <div>
            <a href="{{ route('admin.fechas.index') }}" class="text-sm text-neutral-500 hover:text-neutral-800">← Fechas</a>
            <h1 class="text-2xl font-bold">Bloque {{ $fecha->orden }}</h1>
        </div>
    </div>

    <form method="POST" action="{{ route('admin.fechas.update', $fecha->orden) }}" enctype="multipart/form-data"
          class="grid gap-6 lg:grid-cols-3">
        @csrf
        @method('PUT')

        <div class="adm-card space-y-4 p-6 lg:col-span-2">
            <div>
                <label for="titulo" class="adm-label">Título</label>
                <input id="titulo" name="titulo" value="{{ old('titulo', $fecha->titulo) }}" required maxlength="255" class="adm-input">
                @error('titulo') <p class="adm-error">{{ $message }}</p> @enderror
            </div>

            <div class="grid gap-4 sm:grid-cols-2">
                <div>
                    <label for="subtitulo" class="adm-label">Subtítulo <span class="font-normal text-neutral-400">(ej. comuna)</span></label>
                    <input id="subtitulo" name="subtitulo" value="{{ old('subtitulo', $fecha->subtitulo) }}" maxlength="255" class="adm-input">
                    @error('subtitulo') <p class="adm-error">{{ $message }}</p> @enderror
                </div>
                <div>
                    <label for="bajada" class="adm-label">Bajada <span class="font-normal text-neutral-400">(en negrita)</span></label>
                    <input id="bajada" name="bajada" value="{{ old('bajada', $fecha->bajada) }}" maxlength="255" class="adm-input">
                    @error('bajada') <p class="adm-error">{{ $message }}</p> @enderror
                </div>
            </div>

            <div>
                <label for="descripcion" class="adm-label">Descripción</label>
                <textarea id="descripcion" name="descripcion" rows="6" maxlength="5000" class="adm-input">{{ old('descripcion', $fecha->descripcion) }}</textarea>
                @error('descripcion') <p class="adm-error">{{ $message }}</p> @enderror
            </div>

            <div class="grid gap-4 sm:grid-cols-2">
                <div>
                    <label for="fecha" class="adm-label">Fecha del evento</label>
                    <input id="fecha" name="fecha" type="date" value="{{ old('fecha', $fecha->fecha?->format('Y-m-d')) }}" required class="adm-input">
                    <p class="mt-1 text-xs text-neutral-500">Cuando pasa, el bloque se muestra en gris.</p>
                    @error('fecha') <p class="adm-error">{{ $message }}</p> @enderror
                </div>
                <div>
                    <label for="color" class="adm-label">Color del recuadro</label>
                    <select id="color" name="color" class="adm-input">
                        @foreach ($colores as $valor => $nombre)
                            <option value="{{ $valor }}" @selected(old('color', $fecha->color) === $valor)>{{ $nombre }}</option>
                        @endforeach
                    </select>
                    @error('color') <p class="adm-error">{{ $message }}</p> @enderror
                </div>
            </div>

            <div>
                <label for="url" class="adm-label">URL de tickets</label>
                <input id="url" name="url" type="url" value="{{ old('url', $fecha->url) }}" maxlength="2048" placeholder="https://senal.evently.cl/..." class="adm-input">
                @error('url') <p class="adm-error">{{ $message }}</p> @enderror
            </div>
        </div>

        <div class="space-y-4">
            <div class="adm-card space-y-3 p-6">
                <span class="adm-label">Imagen</span>
                <div class="aspect-square overflow-hidden rounded-lg bg-neutral-200">
                    <img id="preview" alt="Vista previa"
                         src="{{ $fecha->tiene_foto ? $fecha->urlImagen() : '' }}"
                         class="h-full w-full object-cover {{ $fecha->tiene_foto ? '' : 'hidden' }}">
                </div>
                <input id="foto" name="foto" type="file" accept="image/jpeg,image/png,image/gif,image/webp"
                       class="block w-full text-sm text-neutral-600 file:mr-3 file:rounded-lg file:border-0 file:bg-neutral-900 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-neutral-700">
                <p class="text-xs text-neutral-500">JPG, PNG, GIF o WebP, máximo 5 MB. Déjalo vacío para mantener la actual.</p>
                @error('foto') <p class="adm-error">{{ $message }}</p> @enderror
            </div>

            <div class="flex gap-3">
                <button type="submit" class="adm-btn-primary flex-1">Guardar</button>
                <a href="{{ route('admin.fechas.index') }}" class="adm-btn-secondary">Cancelar</a>
            </div>
        </div>
    </form>

    <script>
        document.getElementById('foto').addEventListener('change', function (e) {
            const file = e.target.files[0];
            const preview = document.getElementById('preview');
            if (!file) return;
            preview.src = URL.createObjectURL(file);
            preview.classList.remove('hidden');
        });
    </script>
@endsection
