export default class Dato{
    constructor(description, values){
        this._description = description;
        this._values = values;
    }
    get description(){;
        return this._description;
    }
    set description(description){
        this._description = description;
    }
    get values(){
        return this._values;
    }
    set values(values){
        this._values = values;
    }
}