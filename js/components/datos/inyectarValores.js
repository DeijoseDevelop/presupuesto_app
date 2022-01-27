import { formatoMoneda } from './formatoMoneda/formatoMoneda.js';
import { formatoPorcentaje } from './formatoMoneda/formatoPorcentaje.js';
import { totalPresupuesto } from './formatoMoneda/totalPresupuesto.js';
import { totalIngreso } from './ingreso/totalIngreso.js';
import { totalEgreso } from './egreso/totalEgreso.js';
import { porcentajeEgreso } from './egreso/porcentajeEgreso.js';
import { compararValorPresupuesto } from '../funciones_especiales/compararValorPresupuesto.js';

export const inyectarValores = ()=>{

   ( totalPresupuesto() === null ) 
   ? document.getElementById('inyectarPresupuesto').textContent = formatoMoneda(0) 
   : document.getElementById('inyectarPresupuesto').textContent = formatoMoneda(totalPresupuesto());

   compararValorPresupuesto(document.getElementById('inyectarPresupuesto'));

   ( totalIngreso() === null ) 
   ? document.getElementById('inyectarIngresos').textContent = formatoMoneda(0) 
   : document.getElementById('inyectarIngresos').textContent = formatoMoneda(totalIngreso());
   
   ( totalEgreso() === null ) 
   ? document.getElementById('inyectarEgresos').textContent = formatoMoneda(0) 
   : document.getElementById('inyectarEgresos').textContent = formatoMoneda(totalEgreso());

   document.getElementById('inyectarPorcentaje').textContent = formatoPorcentaje(porcentajeEgreso());
    if(document.getElementById('inyectarPorcentaje').textContent.includes('NaN')){
      document.getElementById('inyectarPorcentaje').textContent = '0 %';
    } 
}