<?php

namespace App\Http\Livewire;

use App\Models\Registro;
use Livewire\Component;

class TablaReporte extends Component
{
    public function render()
    {
        $datos=Registro::all();
        return view('livewire.tabla-reporte',['datos'=>$datos]);
    }
}
