export default class CL_Producto {

    Producto(codigo, tipo, costo) {

        this.Codigo = codigo;
        this.Tipo = tipo;
        this.Costo = costo;
    }

    get Codigo() {
        return this._Codigo;
    }
    set Codigo(codigo) {
        this._Codigo = +codigo;
    }
    get Costo() {
        return this._Costo;
    }
    set Costo(costo) {
        this._Costo = +costo;
    }
    get Tipo() {
        return this._Tipo;
    }
    set Tipo(tipo) {
        this._Tipo = +tipo;
    }

    precioBase() {
        let incremento = this.Costo * 30 / 100;
        return this.Costo + incremento;
    }

    descuento() {
            return this.precioBase() * 10 / 100;
    }

    precioFinal() {
        if (this._Tipo == 1) {
            return this.precioBase() - this.descuento();
        } else {
            return this.precioBase();
        }
    }
}