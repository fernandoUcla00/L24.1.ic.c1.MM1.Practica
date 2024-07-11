export default class Cl_CuentaBancaria {
    constructor(saldoInicial, montoDeposito, montoRetiro) {
        this.saldoInicial = saldoInicial;
        this.montoDeposito = montoDeposito;
        this.montoRetiro = montoRetiro;
    }

    set saldoInicial(c) {
        this._saldoInicial = +c;
    }
    get saldoInicial() {
        return this._saldoInicial;
    }

    set montoDeposito(c) {
        this._montoDeposito = +c;
    }
    get montoDeposito() {
        return this._montoDeposito;
    }

    set montoRetiro(c) {
        this._montoRetiro = +c;
    }
    get montoRetiro() {
        return this._montoRetiro;
    }

    comisionRetiro(){
    return this.montoRetiro*0.05; 
    }
    saldoFinal(){
    return ((this.saldoInicial + this.montoDeposito)- this.montoRetiro)-this.comisionRetiro();
    }
}