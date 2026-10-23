import Sortable from 'sortablejs';

// Reordenar bloques de /admin/fechas arrastrando las tarjetas.
const lista = document.getElementById('bloques');

if (lista) {
    const estado = document.getElementById('estado-orden');
    const csrf = document.querySelector('meta[name="csrf-token"]').content;

    const mostrar = (texto, error = false) => {
        estado.textContent = texto;
        estado.classList.toggle('text-red-600', error);
        estado.classList.toggle('text-neutral-500', !error);
    };

    // Numera las tarjetas según su posición actual.
    const renumerar = () => {
        lista.querySelectorAll('[data-orden]').forEach((tarjeta, i) => {
            tarjeta.querySelector('[data-numero]').textContent = `Bloque ${i + 1}`;
        });
    };

    const ordenOriginal = () => [...lista.children].sort(
        (a, b) => a.dataset.posicionInicial - b.dataset.posicionInicial,
    );

    Sortable.create(lista, {
        animation: 150,
        handle: '[data-arrastrar]',
        ghostClass: 'opacity-40',
        onSort: async () => {
            renumerar();
            const orden = [...lista.querySelectorAll('[data-orden]')].map((t) => Number(t.dataset.orden));

            mostrar('Guardando…');
            lista.classList.add('pointer-events-none');

            try {
                const respuesta = await fetch(lista.dataset.url, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        'X-CSRF-TOKEN': csrf,
                    },
                    body: JSON.stringify({ orden }),
                });

                if (!respuesta.ok) throw new Error(respuesta.status);

                // Recarga para que los enlaces de "Editar" apunten a las nuevas posiciones.
                window.location.reload();
            } catch {
                ordenOriginal().forEach((t) => lista.appendChild(t));
                renumerar();
                mostrar('No se pudo guardar el orden. Intenta de nuevo.', true);
                lista.classList.remove('pointer-events-none');
            }
        },
    });
}
