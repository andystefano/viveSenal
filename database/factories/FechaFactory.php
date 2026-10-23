<?php

namespace Database\Factories;

use App\Models\Fecha;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Fecha>
 */
class FechaFactory extends Factory
{
    public function definition(): array
    {
        return [
            'orden' => fake()->unique()->numberBetween(1, 3),
            'titulo' => fake()->sentence(3),
            'subtitulo' => fake()->city().'.',
            'bajada' => fake()->sentence(2),
            'descripcion' => fake()->paragraph(),
            'fecha' => fake()->dateTimeBetween('+1 week', '+3 months')->format('Y-m-d'),
            'color' => fake()->randomElement(array_keys(Fecha::COLORES)),
            'url' => fake()->url(),
        ];
    }
}
