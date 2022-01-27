import { totalIngreso } from "../ingreso/totalIngreso.js";
import { totalEgreso } from "../egreso/totalEgreso.js";

export const totalPresupuesto = ()=>{
    let presupuesto;
    (totalIngreso() === null && totalEgreso() === null)
    ? presupuesto = 0
    : presupuesto = totalIngreso() - totalEgreso();
    return presupuesto;
}