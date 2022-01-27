import Dato from './Dato.js';

export default class Ingreso extends Dato{

    static contadorIngresos = 0;

    constructor(description, values){
        super(description, values);
        this._id = ++Ingreso.contadorIngresos;
    }
    get id(){
        return this._id;
    }
}