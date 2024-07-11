export default class CL_IPizzeria {


    leerNombre() {
        return prompt("ingrese el nombre");
    }
    leerCantidad() {
        return prompt("ingrese la cantidad");
    }
    leerTamanio() {
        return prompt("ingrese el tamanio");
    }


    repotePizza(d,p){
        return `
        <br> Monto del descuento: ${d}
        <br> Monto a pagar ${p}
        `;
    }
}