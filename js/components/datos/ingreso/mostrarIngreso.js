import { crearIngreso } from './crearIngreso.js';


export const mostrarIngresos = ()=>{
    let presupuestos = JSON.parse(localStorage.getItem('presupuesto'));
    let ingresos = presupuestos[0];
    
    let ingresoHTML = '';

    for(let ingreso of ingresos){
        ingresoHTML += crearIngreso(ingreso);
    }
    document.getElementById('sectionIngreso').innerHTML = ingresoHTML;
}