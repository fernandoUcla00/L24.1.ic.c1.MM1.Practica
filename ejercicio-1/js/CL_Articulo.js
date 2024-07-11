export default class CL_Articulo {
    constructor(costo) {
        this.costo = costo;
    }
    getCosto() {
        return this.costo;
    }
    setCosto(c) {
        this._costo = +c;
    }

    ganacia(){
        return this.costo*0.50;
    }

    precioVenta() {
        return  this.costo + this.ganacia();
    }
}