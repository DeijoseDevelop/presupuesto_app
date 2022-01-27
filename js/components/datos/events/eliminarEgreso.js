export const eliminarEgreso = (id)=>{
    let presupuesto = JSON.parse(localStorage.getItem('presupuesto'));
    let egresos = presupuesto[1];

    let indiceEliminar = egresos.findIndex(egreso => egreso._id == id);
    egresos.splice(indiceEliminar, 1);
    
    localStorage.setItem('presupuesto', JSON.stringify(presupuesto));
}