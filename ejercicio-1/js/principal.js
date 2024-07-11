/**
 * Se tiene el costo de un artículo y se le piensa ganar el 50%... Hacer un programa que calcule el precio de
 *venta. Se tiene el costo de un artículo y se le piensa ganar el 50%... Hacer un programa que calcule el 
 precio de venta. 
 */

import CL_Articulo from "./CL_Articulo.js";
import CL_IArticulo from "./CL_IArticulo.js";


let Iart=new CL_IArticulo(),
c = Iart.leerCosto(),
art=new CL_Articulo(c);

let salida = document.getElementById("salida")

salida.innerHTML = Iart.reporteVenta(art.precioVenta());