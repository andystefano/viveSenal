@extends('admin.layout')

@section('title', 'Fechas')

@php
    $hex = ['bgTPink' => '#F676A6', 'bgTRed' => '#E01C24', 'bgTGreen' => '#019E5B', 'bgTGray' => '#8a8a8a'];
@endphp

@section('content')
    <div class="mb-6">
        <h1 class="text-2xl font-bold">Próximas fechas</h1>
        <p class="text-sm text-neutral-500">Los tres bloques de “Próximas Señales” en la portada, en orden de izquierda a derecha.</p>
        <p class="mt-1 text-sm text-neutral-500">
            Arrastra una tarjeta desde <span class="font-semibold">⠿ Mover</span> para cambiar el orden; se guarda al soltarla.
            <span id="estado-orden" class="ml-1 font-medium text-neutral-500" role="status" aria-live="polite"></span>
        </p>
    </div>

    <div id="bloques" data-url="{{ route('admin.fechas.reordenar') }}" class="grid gap-6 md:grid-cols-3">
        @foreach ($bloques as $orden)
            @php $fecha = $fechas->get($orden); @endphp

            <article class="adm-card flex flex-col overflow-hidden" data-orden="{{ $orden }}" data-posicion-inicial="{{ $loop->index }}">
                <div data-arrastrar class="flex cursor-grab select-none items-center justify-center gap-2 border-b border-neutral-200 bg-neutral-50 py-2 text-xs font-semibold text-neutral-500 hover:bg-neutral-100 active:cursor-grabbing"
                     title="Arrastra para cambiar el orden">
                    <span aria-hidden="true" class="text-base leading-none">⠿</span> Mover
                </div>
                <div class="relative aspect-square bg-neutral-200">
                    @if ($fecha?->tiene_foto)
                        <img src="{{ $fecha->urlImagen() }}" alt="Imagen del bloque {{ $orden }}"
                             class="h-full w-full object-cover {{ $fecha->fecha?->isPast() && ! $fecha->fecha->isToday() ? 'grayscale' : '' }}">
                    @else
                        <div class="flex h-full items-center justify-center text-sm text-neutral-500">Sin imagen</div>
                    @endif
                    <span data-numero class="absolute left-3 top-3 rounded-full bg-black/80 px-2.5 py-1 text-xs font-semibold text-white">Bloque {{ $orden }}</span>
                </div>

                <div class="flex flex-1 flex-col gap-2 p-4">
                    @if ($fecha)
                        <div class="flex items-center gap-2 text-xs text-neutral-500">
                            <span class="inline-block h-3 w-3 rounded-full" style="background: {{ $hex[$fecha->color] ?? '#ccc' }}"></span>
                            {{ $fecha->fecha?->translatedFormat('d \d\e F Y') ?? 'Sin fecha' }}
                            @if ($fecha->fecha?->isPast() && ! $fecha->fecha->isToday())
                                <span class="rounded bg-neutral-200 px-1.5 py-0.5">pasada</span>
                            @endif
                        </div>
                        <h2 class="font-bold leading-tight">{{ $fecha->titulo }}</h2>
                        <p class="text-sm text-neutral-600">{{ $fecha->subtitulo }} <span class="font-semibold">{{ $fecha->bajada }}</span></p>
                        @if ($fecha->url)
                            <a href="{{ $fecha->url }}" target="_blank" rel="noopener" class="truncate text-xs text-pink-600 hover:underline">{{ $fecha->url }}</a>
                        @endif
                    @else
                        <p class="text-sm text-neutral-500">Este bloque aún no tiene contenido.</p>
                    @endif

                    <div class="mt-auto pt-3">
                        <a href="{{ route('admin.fechas.edit', $orden) }}" class="adm-btn-primary w-full">
                            {{ $fecha ? 'Editar' : 'Crear' }}
                        </a>
                    </div>
                </div>
            </article>
        @endforeach
    </div>
@endsection
