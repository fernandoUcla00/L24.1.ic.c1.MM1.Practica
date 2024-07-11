import CL_IPelicula from "./CL_IPelicula.js";
import CL_Pelicula from "./CL_Pelicula.js";


let Ipeli = new CL_IPelicula(),
v1= Ipeli.leervalorP1(),
v2= Ipeli.leervalorP2(),
v3= Ipeli.leervalorP3(),
v4= Ipeli.leervalorP4(),
peli = new CL_Pelicula(v1,v2,v3,v4),

salida = document.getElementById("salida");

salida.innerHTML = Ipeli.reporteRecaudo(peli.totalRecaudo());