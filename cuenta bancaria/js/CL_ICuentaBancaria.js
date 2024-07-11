export default class Cl_ICuentaBancaria{


    leerSaldoInicial(){
        return prompt("ingrese el saldo inicial");
    }
    leerMontoDeposito(){
        return prompt("ingrese el monto a depositar");
    }
    leerMontoRetiro(){
        return prompt("ingrese el monto de los  retiros");
    }
    reporteCuenta(r,f){
        return `
        <br> Comision por retiro ${r},
       <br> Saldo final ${f};
        `
    }

}