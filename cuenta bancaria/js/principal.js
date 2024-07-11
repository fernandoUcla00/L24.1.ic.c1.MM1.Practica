import Cl_CuentaBancaria from "./CL_CuentaBancaria.js";
import Cl_ICuentaBancaria from "./CL_ICuentaBancaria.js";


let cuentaBan = new Cl_ICuentaBancaria,
    saldo = cuentaBan.leerSaldoInicial(),
    deposito = cuentaBan.leerMontoDeposito(),
    retiro = cuentaBan.leerMontoRetiro(),
    
    cuenta = new Cl_CuentaBancaria(saldo, deposito, retiro),
    salida = document.getElementById("salida");

salida.innerHTML = cuentaBan.reporteCuenta(cuenta.comisionRetiro(),cuenta.saldoFinal());