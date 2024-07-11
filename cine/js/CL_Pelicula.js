export default class Pelicula{

    constructor(valorP1,valorP2,valorP3,valorP4){

        this.valorP1= valorP1;
        this.valorP2=valorP2;
        this.valorP3=valorP3;
        this.valorP4=valorP4;
    }

    set valorP1(c){
          this._valorP1=+c;

    }
    get valorP1(){
        return this._valorP1;
    }

    set valorP2(c){
        this._valorP2=+c;
    }
    get valorP2(){
        return this._valorP2;
    }

    set valorP3(c){
        this._valorP3=+c;
    }
    get valorP3(){
        return this._valorP3
    }

    set valorP4(c){
        this._valorP4=+c;
    }
    get valorP4(){
        return this._valorP4;
    }
 
    totalRecaudo(){
        return (this.valorP1 + this.valorP2 + this.valorP3 + this.valorP4);
    }

}