import { presupuestoArticle } from './articles/presupuestoArticle.js';

export const crearHeader = ()=>{
    const $header = document.createElement('header');
    $header.style.backgroundColor = '#ccc8';
    $header.style.textAlign = 'center';
    $header.style.width = '100%';
    $header.style.paddingBottom = '20px';
    const $h1 = document.createElement('h1');
    $h1.textContent = 'Balance Personal';
    $h1.style.padding = '10px';

    let $presupuestoArticle = presupuestoArticle();


    $header.append($h1, $presupuestoArticle);

    return $header;
}