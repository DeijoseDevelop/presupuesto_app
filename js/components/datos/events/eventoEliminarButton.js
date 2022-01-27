import { eliminarIngreso } from './eliminarIngreso.js';
import { eliminarEgreso } from './eliminarEgreso.js';
import { mostrarTodo } from '../mostrarTodo.js';
import { inyectarValores } from '../inyectarValores.js';

export const eventoEliminarButton = ()=>{
    document.addEventListener('click', (e)=>{
        e.preventDefault();
        let elementoEliminar = Number(e.target.getAttribute('data-id'));
        if(e.target.classList.contains('button-eliminar-ingreso')){
            eliminarIngreso(elementoEliminar);
        } else if(e.target.classList.contains('button-eliminar-egreso')){
            eliminarEgreso(elementoEliminar);
        }
        mostrarTodo();
        inyectarValores();
    });
}