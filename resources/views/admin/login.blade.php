@extends('admin.layout')

@section('title', 'Ingresar')

@section('content')
    <div class="mx-auto mt-12 max-w-sm">
        <div class="mb-6 text-center">
            <span class="inline-block h-4 w-4 rounded-full bg-pink-400"></span>
            <h1 class="mt-2 text-2xl font-bold">Vive Señal</h1>
            <p class="text-sm text-neutral-500">Sistema de administración</p>
        </div>

        <form method="POST" action="{{ route('admin.login') }}" class="adm-card space-y-4 p-6">
            @csrf

            <div>
                <label for="email" class="adm-label">Email</label>
                <input id="email" name="email" type="email" value="{{ old('email') }}" required autofocus autocomplete="username" class="adm-input">
                @error('email') <p class="adm-error">{{ $message }}</p> @enderror
            </div>

            <div>
                <label for="password" class="adm-label">Clave</label>
                <input id="password" name="password" type="password" required autocomplete="current-password" class="adm-input">
                @error('password') <p class="adm-error">{{ $message }}</p> @enderror
            </div>

            <label class="flex items-center gap-2 text-sm text-neutral-600">
                <input type="checkbox" name="remember" value="1" class="rounded border-neutral-300 text-pink-500 focus:ring-pink-500">
                Mantener sesión iniciada
            </label>

            <button type="submit" class="adm-btn-primary w-full">Entrar</button>
        </form>
    </div>
@endsection
