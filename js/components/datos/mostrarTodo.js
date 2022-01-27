import { mostrarIngresos } from "./ingreso/mostrarIngreso.js";
import { mostrarEgresos } from "./egreso/mostrarEgreso.js";

export const mostrarTodo = ()=>{
    mostrarIngresos();
    mostrarEgresos();
}