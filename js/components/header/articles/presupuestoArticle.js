import { formatoMoneda } from '../../datos/formatoMoneda/formatoMoneda.js';
import { ingresosArticle } from './ingresosArticle.js';
import { egresosArticle } from './egresosArticle.js';
import { totalPresupuesto } from '../../datos/formatoMoneda/totalPresupuesto.js';
import { compararValorPresupuesto } from '../../funciones_especiales/compararValorPresupuesto.js';

export const presupuestoArticle = ()=>{
    let $presupuestoArticle = document.createElement('article');
    $presupuestoArticle.id = 'presupuesto-article';
    let $h1 = document.createElement('h1');
    $h1.id = 'inyectarPresupuesto';
    $h1.textContent = formatoMoneda(totalPresupuesto());
    compararValorPresupuesto($h1);
    $h1.style.fontSize = '2rem';
    $h1.style.backgroundColor = 'rgba(40,40,40,.8)';
    $h1.style.borderRadius = '10px';
    $h1.style.padding = '10px 0';

    let $ingresosArticle = ingresosArticle();
    let $egresosArticle = egresosArticle();

    $presupuestoArticle.append($h1, $ingresosArticle, $egresosArticle);

    return $presupuestoArticle;
}