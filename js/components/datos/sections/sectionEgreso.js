export const sectionEgreso = (padre)=>{
    let $sectionEgreso = document.createElement('section');
    $sectionEgreso.id = 'section-egreso';
    let $mostrar = document.createElement('section');
    $mostrar.style.width = '100%';
    $mostrar.id = 'sectionEgreso';

    let $h2 = document.createElement('h2');
    $h2.textContent = 'Egresos';
    $h2.style.color = 'rgb(255, 80, 73)';
    $h2.style.marginBottom = '20px';

    $sectionEgreso.append($h2, $mostrar);

    padre.append($sectionEgreso);
}