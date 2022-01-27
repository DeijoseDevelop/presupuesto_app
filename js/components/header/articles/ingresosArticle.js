import { formatoMoneda } from "../../datos/formatoMoneda/formatoMoneda.js";
import { totalIngreso } from "../../datos/ingreso/totalIngreso.js";

export const ingresosArticle = ()=>{

    let $ingresosArticle = document.createElement('article');
    $ingresosArticle.id = 'ingresos-article';
    $ingresosArticle.style.padding = '15px';
    $ingresosArticle.style.color = '#28B9B5';
    let $h1 = document.createElement('h1');
    $h1.textContent = 'Ingresos';
    let $p = document.createElement('p');
    $p.id = 'inyectarIngresos';
    $p.textContent = (totalIngreso() === null) ? formatoMoneda(0) : formatoMoneda(totalIngreso());
    $p.style.fontWeight = 'bold';
    $ingresosArticle.append($h1,$p);

    return $ingresosArticle;
}