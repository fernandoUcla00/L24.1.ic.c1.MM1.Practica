import CL_IPizzeria from "./CL_IPizzeria.js";
import CL_Pizzeria from "./CL_Pizzeria.js";

let Ipizza = new CL_IPizzeria(),
 
n = Ipizza.leerNombre(),
c = Ipizza.leerCantidad(),
t = Ipizza.leerTamanio(),

pizza = new CL_Pizzeria(n,c,t),
salida = document.getElementById("salida");

salida.innerHTML = Ipizza.repotePizza(pizza.montoDescuento(),pizza.montoPagar());