export const inputValor = (padre)=>{
    let $input = document.createElement('input');
    $input.type = 'number';
    $input.id = 'valor';
    $input.placeholder = 'Valor';
    $input.style.padding = '5px';

    padre.append($input);
}