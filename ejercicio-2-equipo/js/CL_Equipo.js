export default class CL_Equipo {

    constructor(gol_f,gol_E){
        this.gol_f = gol_f;
        this.gol_E = gol_E;
    }

    getGol_f(){
        return this.gol_f;
    }
    setGol_f(g){
        this._gol_f = +g;
    }
    getGol_E(){
        return this.gol_E;
    }
    setGol_E(g){
        this._gol_E = +g;
    }
    resultado(){
        if (this.gol_f > this.gol_E){
            return "GANASTE";
        }
    }
}