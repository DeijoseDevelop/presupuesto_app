export const totalIngreso = ()=>{
    let totalIngresos = 0;
    if(JSON.parse(localStorage.getItem('presupuesto')) !== null){
        let presupuesto = JSON.parse(localStorage.getItem('presupuesto'));
        let ingresos = presupuesto[0];

        for(let ingreso of ingresos){
            totalIngresos += ingreso._values;
        }
    }
        
    return totalIngresos;
}