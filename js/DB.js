import Ingreso from "./clases/Ingreso.js";
import Egreso from './clases/Egreso.js';
import { mostrarTodo } from "./components/datos/mostrarTodo.js";
import { inyectarValores } from './components/datos/inyectarValores.js';

export let ingresos = [
];

export let egresos = [
];

export let presupuesto = [
    ingresos,
    egresos
];

export const agregarDato = ()=>{
    document.getElementById('añadir').addEventListener('click', (e)=>{
        
        e.preventDefault();
        let $tipo = document.getElementById('tipo'),
            $description = document.getElementById('description'),
            $valor = document.getElementById('valor');
            if(localStorage.getItem('presupuesto') === null){
                if($description.value !== '' && $valor.value !== ''){
                    if($tipo.value === 'ingreso'){
                        ingresos.push(new Ingreso($description.value, Math.abs(Number($valor.value))));
                        if($valor.value.includes('-')){
                            $valor.value[0] = '';
                        }
                } else if($tipo.value === 'egreso'){
                    egresos.push(new Egreso($description.value, Math.abs(Number($valor.value))));
                    if($valor.value.includes('-')){
                            $valor.value[0] = '';
                        }
                }
            }
            localStorage.setItem('presupuesto', JSON.stringify(presupuesto));
            mostrarTodo();
            inyectarValores();
        } else {
            presupuesto = JSON.parse(localStorage.getItem('presupuesto'));
            ingresos = presupuesto[0];
            egresos = presupuesto[1];
            if($description.value !== '' && $valor.value !== ''){
                if($tipo.value === 'ingreso'){
                    ingresos.push(new Ingreso($description.value, Math.abs(Number($valor.value))));
                    if($valor.value.includes('-')){
                        $valor.value[0] = '';
                    }
                } else if($tipo.value === 'egreso'){
                    egresos.push(new Egreso($description.value, Math.abs(Number($valor.value))));
                    if($valor.value.includes('-')){
                        $valor.value[0] = '';
                    } 
                }
            }
            localStorage.setItem('presupuesto', JSON.stringify(presupuesto));
            mostrarTodo();
            inyectarValores();
        }
        document.getElementById('form').reset();
    });
}