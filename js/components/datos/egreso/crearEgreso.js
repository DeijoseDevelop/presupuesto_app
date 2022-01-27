import { formatoMoneda } from '../formatoMoneda/formatoMoneda.js';
import { formatoPorcentaje } from '../formatoMoneda/formatoPorcentaje.js';
import { totalEgreso } from './totalEgreso.js';

export const crearEgreso = (egreso)=>{
    let egresoHTML = `
        <article class="articulo-egreso">
        <h3 class="elemento_descripcion">${egreso._description}</h3>
                <p class="elemento_valor">- ${formatoMoneda(egreso._values)}</p>
                <span class="elemento_valor">${formatoPorcentaje(egreso._values / totalEgreso())}</span>
                <div class="elemento_eliminar">
                    <button>
                        <ion-icon name='close-circle-outline' class="button-eliminar-egreso" data-id="${egreso._id}"></ion-icon>
                    </button>
                </div>
            </div>
        </article>
    `;
    return egresoHTML;
}