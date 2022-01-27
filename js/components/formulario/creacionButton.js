export const creacionButton = (padre)=>{
    let $button = document.createElement('button');
    $button.id = 'añadir';
    $button.style.backgroundColor = 'rgba(30,30,30,0.2)';
    $button.style.borderRadius = '20px';
    $button.style.border = 'none';
    $button.style.cursor = 'pointer';
    $button.style.padding = '5px'
    $button.addEventListener('mousedown', function(e){
        $button.style.backgroundColor = 'rgb(40, 185, 181)';
        $icon.style.color = 'rgba(30,30,30,0.2)';
    });
    $button.addEventListener('mouseup', function(e){
        $button.style.backgroundColor = 'rgba(30,30,30,0.2)';
        $icon.style.color = 'rgb(40, 185, 181)';
    });

    let $icon = document.createElement('ion-icon');
    $icon.name = 'checkmark-circle-outline';
    $icon.style.fontSize = '1.6rem';
    $icon.style.color = 'rgb(40, 185, 181)';

    $button.append($icon);

    padre.append($button);
}