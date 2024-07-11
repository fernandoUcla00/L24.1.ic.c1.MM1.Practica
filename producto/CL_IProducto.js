export default class CL_IProducto {


  leercodigo() {
    return prompt("Ingresar Codigo")
  }

  leertipo() {
    return prompt("Ingresar Tipo")
  }

  leerCosto() {
    return prompt("Ingresar Costo")
  }

  mostrar(c, t, co) {
    return `
          <br> codigo: ${c}
          <br> tipo: ${t}
          <br> Costo: ${co}
          `
  }
}


