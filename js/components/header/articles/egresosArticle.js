import { formatoMoneda } from "../../datos/formatoMoneda/formatoMoneda.js";
import { formatoPorcentaje } from "../../datos/formatoMoneda/formatoPorcentaje.js";
import { totalEgreso } from "../../datos/egreso/totalEgreso.js";
import { porcentajeEgreso } from '../../datos/egreso/porcentajeEgreso.js';

export const egresosArticle = ()=>{

    let $egresosArticle = document.createElement('article');
    $egresosArticle.id = 'egresos-article';
    $egresosArticle.style.padding = '15px';
    $egresosArticle.style.color = '#FF5049';
    let $h1 = document.createElement('h1');
    $h1.textContent = 'Egresos';
    let $div = document.createElement('div');
    $div.style.display = 'flex';
    let $p = document.createElement('p');
    $p.id = 'inyectarEgresos';
    $p.textContent = (totalEgreso() === null) ? formatoMoneda(0) : formatoMoneda(totalEgreso());
    $p.style.fontWeight = 'bold';
    let $span = document.createElement('span');
    $span.id = 'inyectarPorcentaje';
    $span.textContent = formatoPorcentaje(porcentajeEgreso());
    if($span.textContent.includes('NaN')){
        $span.textContent = '0 %';
    } 
    $span.style.backgroundColor = 'rgba(200,200,200,.5)';
    $span.style.borderRadius = '10px';
    $span.style.marginLeft = '5px';
    $span.style.padding = '0 5px';
    $span.style.paddingTop = '4px';
    $div.append($p,$span)
    $egresosArticle.append($h1,$div);

    return $egresosArticle;
}