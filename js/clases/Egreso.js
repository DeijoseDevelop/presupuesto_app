import Dato from "./Dato.js";

export default class Egreso extends Dato{

    static contadorEgresos = 0;

    constructor(description, values){
        super(description, values);
        this._id = ++Egreso.contadorEgresos;
    }
    get id(){
        return this._id;
    }
}