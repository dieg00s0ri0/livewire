<?php

use App\Http\Controllers\RegistroController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/index', function () {
    return view('welcome');
});
Route::get('/registros', [RegistroController::class, 'index'])->name('registrosindex');
Route::get('/tablar', [RegistroController::class, 'tablar'])->name('tablar');
Route::get('/obtener-tabla',  [RegistroController::class, 'tabla'])->name('obtener-tabla');
Route::get('/Reporte',  [RegistroController::class, 'reporte'])->name('reporte');
