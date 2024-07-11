export default class CL_Pizzeria {
    constructor(nombre,cantidad,tamanio){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tamanio = tamanio;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get nombre(){
        return this._nombre;
    }
    set cantidad(cantidad){
        this._cantidad = +cantidad;
    }
    get cantidad(){
        return this._cantidad;
    }
    set tamanio(tamanio){
        this._tamanio = +tamanio;
    }
    get tamanio(){
        return this._tamanio;
    }

    montoDescuento(){
        switch(this.tamanio){
            case 1:
                if(this.cantidad > 2){
                    return (5 * this.cantidad)* 25/100;
                }else{
                    return 0;
                };
            case 2:
                if(this.cantidad > 2){
                    return (10 * this.cantidad)* 25 / 100;
                }
                else{
                    return 0;
                };
            case 3:
                if(this.cantidad > 2){
                    return (15 * this.cantidad )* 25 /100;
                }
                else{
                    return 0;
                };
        }
    }
    montoPagar(){
            
         switch(this._tamanio){
            case 1:
                return (this._cantidad * 5) - this.montoDescuento();
            case 2:
                return (this._cantidad * 10) - this.montoDescuento();
            case 3:
                return (this._cantidad * 15) - this.montoDescuento();
        }
    }
}
