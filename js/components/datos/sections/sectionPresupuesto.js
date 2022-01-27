import { sectionIngreso } from './sectionIngreso.js';
import { sectionEgreso } from './sectionEgreso.js';
import { mostrarTodo } from '../mostrarTodo.js';

export const sectionPresupuesto = ()=>{
    let $sectionPresupuesto = document.createElement('section');
    $sectionPresupuesto.id = 'section-presupuesto';

    sectionIngreso($sectionPresupuesto);
    sectionEgreso($sectionPresupuesto);

    document.body.append($sectionPresupuesto);

    mostrarTodo();
}