export default class CL_IEstudiante{

    leereva1(){
        return prompt("ingrese la nota de la evalucion 1:");
    }
    leereva2(){
        return prompt("ingrese la nota de la evalucion 2:");
    }
    leereva3(){
        return prompt("ingrese la nota de la evalucion 3:");
    }

    reporteEstudiante(nf,c){
        return `
    <br> Nota Final: ${nf}
     <br> resultado: ${c};
    `
    }
}