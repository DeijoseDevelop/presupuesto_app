import { crearEgreso } from './crearEgreso.js';


export const mostrarEgresos = ()=>{
    let presupuestos = JSON.parse(localStorage.getItem('presupuesto'));
    let egresos = presupuestos[1];

    let egresoHTML = '';

    for(let egreso of egresos){
        egresoHTML += crearEgreso(egreso);
    }
    document.getElementById('sectionEgreso').innerHTML = egresoHTML;
}