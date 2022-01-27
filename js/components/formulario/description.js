export const inputDescription = (padre)=>{
    let $input = document.createElement('input');
    $input.type = 'text';
    $input.placeholder = 'Agregar Descripcion';
    $input.id = 'description';
    $input.style.padding = '5px';
    

    padre.append($input)
}