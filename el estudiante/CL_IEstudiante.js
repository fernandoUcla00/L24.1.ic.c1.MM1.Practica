export default class IEstudiate {

  leeCedula() {
    return prompt("ingrese su cedula")
  }

  leeNota1() {
    return prompt("ingrese su nota 1")
  }

  leeNota2() {
    return prompt("ingrese su nota 2")
  }

  leeNota3() {
    return prompt("ingrese su nota 3")
  }

  reporteEstudiante(c, n1, n2, n3, nf) {
    return `
    <br> Cedula: ${c}  
    <br> Nota 1: ${n1}
    <br> Nota 2: ${n2}
    <br> Nota 3: ${n3}
    <br> Nota Final: ${nf}
    `;
  }
}