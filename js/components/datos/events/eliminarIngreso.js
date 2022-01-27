export const eliminarIngreso = (id)=>{
    let presupuesto = JSON.parse(localStorage.getItem('presupuesto'));
    let ingresos = presupuesto[0];
    
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso._id == id);
    ingresos.splice(indiceEliminar, 1);
    localStorage.setItem('presupuesto', JSON.stringify(presupuesto));
}