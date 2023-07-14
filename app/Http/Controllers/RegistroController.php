<?php

namespace App\Http\Controllers;

use App\Models\Registro;
use Illuminate\Http\Request;

class RegistroController extends Controller
{
    public function index()
    {
      

        return view('registros.index');
    }
    public function tablar()
    {
        $datos = Registro::paginate(2);

        return view('registros.tabla', compact('datos'));
    }
    public function tabla()
    {
       // Obtener todos los datos de la tabla
       $datos = Registro::all();

       // Devolver la vista parcial de la tabla
       return view('registros.tablaotra', compact('datos'));
    }
    public function reporte()
    {
        return view('view.colsult-reporte');
        // dd('hola');
    }

    
    
}
