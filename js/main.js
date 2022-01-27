import { mostrarHeader } from './components/header/mostrarHeader.js';
import { mostrarFormulario } from './components/formulario/mostrarFormulario.js';
import { sectionPresupuesto } from './components/datos/sections/sectionPresupuesto.js';
import { eventoEliminarButton } from './components/datos/events/eventoEliminarButton.js';

document.addEventListener('DOMContentLoaded', function(e){
    mostrarHeader();
    mostrarFormulario();
    sectionPresupuesto();
    eventoEliminarButton();
});
