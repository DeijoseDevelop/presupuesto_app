export const compararValorPresupuesto = (elemento)=>{
    elemento.style.color = '#28B9B5';
   if(elemento.textContent.includes('-')){
      elemento.style.color = '#FF5049';
  }
}