export const formatoMoneda = (valor)=>{
    return valor.toLocaleString('es-CO', {style: 'currency', currency: 'COP', minimunFractionDigits: 2});
}