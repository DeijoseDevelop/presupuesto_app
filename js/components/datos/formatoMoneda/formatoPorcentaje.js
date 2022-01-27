export const formatoPorcentaje = (valor)=>{
    return valor.toLocaleString('es-CO', {style: 'percent', minimunFractionDigits: 2});
}