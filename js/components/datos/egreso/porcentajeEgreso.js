import { totalIngreso } from "../ingreso/totalIngreso.js";
import { totalEgreso } from "./totalEgreso.js";

export const porcentajeEgreso = ()=>{
    let porcentaje = Number(totalEgreso()) / Number(totalIngreso());
    return porcentaje;
}