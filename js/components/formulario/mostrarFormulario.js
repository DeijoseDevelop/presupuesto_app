import { divForm } from "./divForm.js";
import { agregarDato } from "../../DB.js";

export const mostrarFormulario = ()=>{
    let $div = divForm();
    document.body.append($div);

    agregarDato();
}