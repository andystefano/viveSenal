@extends('admin.layout')

@section('title', $usuario->exists ? 'Editar usuario' : 'Nuevo usuario')

@section('content')
    <div class="mx-auto max-w-lg">
        <a href="{{ route('admin.usuarios.index') }}" class="text-sm text-neutral-500 hover:text-neutral-800">← Usuarios</a>
        <h1 class="mb-6 text-2xl font-bold">{{ $usuario->exists ? 'Editar usuario' : 'Nuevo usuario' }}</h1>

        <form method="POST"
              action="{{ $usuario->exists ? route('admin.usuarios.update', $usuario) : route('admin.usuarios.store') }}"
              class="adm-card space-y-4 p-6">
            @csrf
            @if ($usuario->exists)
                @method('PUT')
            @endif

            <div>
                <label for="name" class="adm-label">Nombre</label>
                <input id="name" name="name" value="{{ old('name', $usuario->name) }}" required maxlength="255" class="adm-input">
                @error('name') <p class="adm-error">{{ $message }}</p> @enderror
            </div>

            <div>
                <label for="email" class="adm-label">Email</label>
                <input id="email" name="email" type="email" value="{{ old('email', $usuario->email) }}" required maxlength="255" autocomplete="off" class="adm-input">
                @error('email') <p class="adm-error">{{ $message }}</p> @enderror
            </div>

            <div>
                <label for="password" class="adm-label">
                    Clave
                    @if ($usuario->exists) <span class="font-normal text-neutral-400">(déjala vacía para no cambiarla)</span> @endif
                </label>
                <input id="password" name="password" type="password" @required(! $usuario->exists) minlength="8" autocomplete="new-password" class="adm-input">
                @error('password') <p class="adm-error">{{ $message }}</p> @enderror
            </div>

            <div>
                <label for="password_confirmation" class="adm-label">Repetir clave</label>
                <input id="password_confirmation" name="password_confirmation" type="password" autocomplete="new-password" class="adm-input">
            </div>

            <div class="flex gap-3 pt-2">
                <button type="submit" class="adm-btn-primary">Guardar</button>
                <a href="{{ route('admin.usuarios.index') }}" class="adm-btn-secondary">Cancelar</a>
            </div>
        </form>
    </div>
@endsection
