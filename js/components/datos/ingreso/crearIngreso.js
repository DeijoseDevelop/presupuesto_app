import { formatoMoneda } from '../formatoMoneda/formatoMoneda.js';

export const crearIngreso = (ingreso)=>{
    let ingresoHTML = `
        <article class="articulo-ingreso">
            <h3 class="elemento_descripcion">${ingreso._description}</h3>
                <p class="elemento_valor">+ ${formatoMoneda(ingreso._values)}</p>
                <div class="elemento_eliminar">
                    <button>
                        <ion-icon name='close-circle-outline' class="button-eliminar-ingreso" data-id="${ingreso._id}"></ion-icon>
                    </button>
                </div>
            </div>
        </article>
    `;
    return ingresoHTML;
}
