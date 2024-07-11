export default class CL_IArticulo {

    leerCosto() {
        return prompt("Introduzca el costo del articulo");
    }

    reporteVenta(cs){
        return `
        <br>El PVP es ${cs}  
    `;
    }


}