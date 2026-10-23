<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex, nofollow">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title', 'Admin') · Vive Señal</title>
    <link rel="icon" href="/favicon.ico">
    @vite(['resources/css/admin.css', 'resources/js/admin.js'])
</head>
<body class="min-h-screen bg-neutral-100 text-neutral-900 antialiased">
    @auth
        <header class="bg-black text-white">
            <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
                <a href="{{ route('admin.fechas.index') }}" class="flex items-center gap-2 font-bold tracking-wide">
                    <span class="inline-block h-3 w-3 rounded-full bg-pink-400"></span>
                    SEÑAL <span class="font-normal text-neutral-400">admin</span>
                </a>
                <nav class="flex items-center gap-1 text-sm">
                    <a href="{{ route('admin.fechas.index') }}"
                       class="rounded-md px-3 py-1.5 {{ request()->routeIs('admin.fechas.*') ? 'bg-white/15' : 'hover:bg-white/10' }}">Fechas</a>
                    <a href="{{ route('admin.usuarios.index') }}"
                       class="rounded-md px-3 py-1.5 {{ request()->routeIs('admin.usuarios.*') ? 'bg-white/15' : 'hover:bg-white/10' }}">Usuarios</a>
                    <a href="{{ route('home') }}" target="_blank" rel="noopener" class="rounded-md px-3 py-1.5 hover:bg-white/10">Ver sitio ↗</a>
                </nav>
                <div class="flex items-center gap-3 text-sm">
                    <span class="hidden text-neutral-400 sm:inline">{{ auth()->user()->email }}</span>
                    <form method="POST" action="{{ route('admin.logout') }}">
                        @csrf
                        <button type="submit" class="rounded-md border border-white/30 px-3 py-1.5 hover:bg-white/10">Salir</button>
                    </form>
                </div>
            </div>
        </header>
    @endauth

    <main class="mx-auto max-w-6xl px-4 py-8">
        @if (session('status'))
            <div class="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
                {{ session('status') }}
            </div>
        @endif

        @yield('content')
    </main>
</body>
</html>
