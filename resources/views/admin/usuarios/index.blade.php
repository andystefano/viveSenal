@extends('admin.layout')

@section('title', 'Usuarios')

@section('content')
    <div class="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
            <h1 class="text-2xl font-bold">Usuarios</h1>
            <p class="text-sm text-neutral-500">Personas con acceso a este administrador.</p>
        </div>
        <a href="{{ route('admin.usuarios.create') }}" class="adm-btn-primary">+ Nuevo usuario</a>
    </div>

    @error('usuario')
        <div class="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">{{ $message }}</div>
    @enderror

    <div class="adm-card overflow-x-auto">
        <table class="w-full text-left text-sm">
            <thead class="border-b border-neutral-200 text-xs uppercase tracking-wide text-neutral-500">
                <tr>
                    <th class="px-4 py-3">Nombre</th>
                    <th class="px-4 py-3">Email</th>
                    <th class="hidden px-4 py-3 sm:table-cell">Creado</th>
                    <th class="px-4 py-3"></th>
                </tr>
            </thead>
            <tbody class="divide-y divide-neutral-100">
                @foreach ($usuarios as $usuario)
                    <tr>
                        <td class="px-4 py-3 font-medium">
                            {{ $usuario->name }}
                            @if ($usuario->is(auth()->user()))
                                <span class="ml-1 rounded bg-pink-100 px-1.5 py-0.5 text-xs text-pink-700">tú</span>
                            @endif
                        </td>
                        <td class="px-4 py-3 text-neutral-600">{{ $usuario->email }}</td>
                        <td class="hidden px-4 py-3 text-neutral-500 sm:table-cell">{{ $usuario->created_at?->format('d-m-Y') }}</td>
                        <td class="px-4 py-3">
                            <div class="flex justify-end gap-1">
                                <a href="{{ route('admin.usuarios.edit', $usuario) }}" class="adm-btn-secondary px-3 py-1.5">Editar</a>
                                @unless ($usuario->is(auth()->user()))
                                    <form method="POST" action="{{ route('admin.usuarios.destroy', $usuario) }}"
                                          data-confirm="¿Eliminar a {{ $usuario->email }}?"
                                          onsubmit="return confirm(this.dataset.confirm)">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="adm-btn-danger px-3 py-1.5">Eliminar</button>
                                    </form>
                                @endunless
                            </div>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection
