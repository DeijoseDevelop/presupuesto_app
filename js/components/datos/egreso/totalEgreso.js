export const totalEgreso = ()=>{
    let totalEgresos = 0;
    if(JSON.parse(localStorage.getItem('presupuesto')) === null){
        console.log('no hay egresos')
    } else{
        let presupuesto = JSON.parse(localStorage.getItem('presupuesto'));
        let egresos = presupuesto[1];

        for(let egreso of egresos){
            totalEgresos += egreso._values;
        }
    }
    return totalEgresos;
}