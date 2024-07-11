/**
 * De un producto se conoce su código, costo y tipo (1: Dama, 2: Caballero, 3: niño). Se sabe
que el precio base de venta del producto resulta de incrementar un 30% al costo del mismo;
además, el precio final del producto tiene un 10% de descuento si es para niños. Realice un
programa que muestre: el código, el precio base de venta, el descuento y el precio final

 */

import  CL_IProducto  from "./CL_IProducto.js";

import CL_Producto  from "./CL_Producto.js";


const IProd = new CL_IProducto();

let c = IProd.leercodigo();
let t = IProd.leertipo();
let co = IProd.leerCosto();



const Prod = new CL_Producto(c, t, co);


 let salida = document.getElementById("salida");

 salida.innerHTML = IProd.mostrar(Prod.Codigo, Prod.Tipo, Prod.Costo)