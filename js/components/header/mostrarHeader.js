import { crearHeader } from './crearHeader.js';

export const mostrarHeader = ()=>{
    let $header = crearHeader();

    document.body.append($header);
}