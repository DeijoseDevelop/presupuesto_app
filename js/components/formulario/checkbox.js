export const checkbox = (padre)=>{
    let $select = document.createElement('select');
    $select.id = 'tipo';
    $select.style.padding = '5px';
    let $ingreso = document.createElement('option');
    $ingreso.value = 'ingreso';
    $ingreso.selected = 'true';
    $ingreso.textContent = '+ Ingreso';
    let $egreso = document.createElement('option');
    $egreso.value = 'egreso';
    $egreso.textContent = '- Egreso';

    $select.append($ingreso, $egreso);

   padre.append($select);
}