export const sectionIngreso = (padre)=>{
    let $sectionIngreso = document.createElement('section');
    $sectionIngreso.id = 'section-ingreso';
    let $mostrar = document.createElement('section');
    $mostrar.style.width = '100%';
    $mostrar.id = 'sectionIngreso';

    let $h2 = document.createElement('h2');
    $h2.textContent = 'Ingresos';
    $h2.style.color = 'rgb(40, 185, 181)';
    $h2.style.marginBottom = '20px';

    $sectionIngreso.append($h2,$mostrar);

    padre.append($sectionIngreso);
}