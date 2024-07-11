import CL_Estudiante from "./CL_Estudiante.js";
import CL_IEstudiante from "./CL_IEstudiante.js";



let Iestud = new CL_IEstudiante(),

    c = Iestud.leeCedula(),
    n1 = Iestud.leeNota1(),
    n2 = Iestud.leeNota2(),
    n3 = Iestud.leeNota3(),

    estudid = new CL_Estudiante(c, n1, n2, n3),
    salida = document.getElementById("salida");
    salida.innerHTML = Iestud.reporteEstudiante(estudid.cedula, estudid.nota1, estudid.nota2, estudid.nota3, estudid.calcularNotaFinal());
