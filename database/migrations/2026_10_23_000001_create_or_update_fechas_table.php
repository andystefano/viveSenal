<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

/**
 * La tabla `fechas` ya existe en producción (creada por el admin PHP anterior),
 * por lo que esta migración la crea solo si falta y, si existe, agrega las
 * columnas que necesite sin tocar los datos.
 */
return new class extends Migration
{
    public function up(): void
    {
        if (! Schema::hasTable('fechas')) {
            Schema::create('fechas', function (Blueprint $table) {
                $table->increments('id');
                $table->integer('orden')->unique();
                $table->string('titulo');
                $table->string('subtitulo');
                $table->string('bajada');
                $table->text('descripcion');
                $table->binary('foto')->nullable();
                $table->timestamp('fecha_creacion')->useCurrent();
                $table->timestamp('updated_at')->nullable();
                $table->date('fecha');
                $table->enum('color', ['bgTPink', 'bgTRed', 'bgTGreen', 'bgTGray'])->default('bgTPink');
                $table->string('url', 2048)->default('');
            });

            // BLOB de MySQL tiene tope de 64 KB; las imágenes pesan cientos de KB.
            if (in_array(DB::getDriverName(), ['mysql', 'mariadb'])) {
                DB::statement('ALTER TABLE `fechas` MODIFY `foto` LONGBLOB NULL');
            }

            return;
        }

        Schema::table('fechas', function (Blueprint $table) {
            if (! Schema::hasColumn('fechas', 'fecha')) {
                $table->date('fecha')->nullable();
            }
            if (! Schema::hasColumn('fechas', 'color')) {
                $table->enum('color', ['bgTPink', 'bgTRed', 'bgTGreen', 'bgTGray'])->default('bgTPink');
            }
            if (! Schema::hasColumn('fechas', 'url')) {
                $table->string('url', 2048)->default('');
            }
            if (! Schema::hasColumn('fechas', 'updated_at')) {
                $table->timestamp('updated_at')->nullable();
            }
        });

        // updated_at versiona la URL de la imagen; se inicializa para las filas existentes.
        DB::table('fechas')->whereNull('updated_at')->update(['updated_at' => now()]);
    }

    public function down(): void
    {
        // Solo se revierte la columna agregada por Laravel: la tabla y sus datos
        // pertenecen al sitio y no deben borrarse al hacer rollback.
        if (Schema::hasColumn('fechas', 'updated_at')) {
            Schema::table('fechas', function (Blueprint $table) {
                $table->dropColumn('updated_at');
            });
        }
    }
};
