import { checkbox } from "./checkbox.js";
import { inputDescription } from "./description.js";
import { inputValor } from "./valor.js";
import { creacionButton } from "./creacionButton.js";

export const form = (padre)=>{
    let $form = document.createElement('form');
    $form.id = 'form';

    checkbox($form);
    inputDescription($form);
    inputValor($form);
    creacionButton($form);

    padre.append($form)
}