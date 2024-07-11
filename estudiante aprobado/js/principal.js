import CL_Estudiante from "./CL_Estudiante.JS";
import CL_IEstudiante from "./CL_IEstudiante.JS";

let Iestu = new CL_IEstudiante(),
ev1=Iestu.leereva1(),
ev2=Iestu.leereva2(),
ev3=Iestu.leereva3(),

estu = new CL_Estudiante(ev1,ev2,ev3),
salida= document.getElementById("salida");

salida.innerHTML=Iestu.reporteEstudiante(estu.notaFinal(),estu.estudianteAprobado());