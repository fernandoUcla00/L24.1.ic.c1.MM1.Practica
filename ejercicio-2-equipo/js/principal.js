
import CL_IEquipo from "./CL_IEquipo.js";
import CL_Equipo from "./CL_Equipo.js";


let Iequ = new CL_IEquipo(),
    g1 = Iequ.leerGolesF(),
    g2 = Iequ.leerGolesE(),
    equi = new CL_Equipo(g1,g2),
    salida = document.getElementById("salida");

salida.innerHTML = Iequ.reporteEquipo(equi.resultado());