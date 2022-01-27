import { form } from './form.js';

export const divForm = ()=>{
    let $div = document.createElement('div');
    $div.style.width = '100%';
    $div.style.backgroundColor = 'rgba(100,100,100,0.8)';
    $div.style.height = 'auto';
    $div.style.padding = '10px';
    $div.style.display = 'grid';
    $div.style.placeItems = 'center';

    form($div)

    return $div;
}