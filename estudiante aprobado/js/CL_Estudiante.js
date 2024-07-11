export default class CL_Estudiante{

    constructor(eva1,eva2,eva3){
        this.eva1 = eva1;
        this.eva2 = eva2;
        this.eva3 = eva3;
    }
    set eva1(c){
        this._eva1 = +c;
    }
    get eva1(){
        return this._eva1;
    }
    set eva2(c){
        this._eva2 = +c;
    }
    get eva2(){
        return this._eva2;
    }
    set eva3(c){
        this._eva3 = +c;
    }
    get eva3(){
        return this._eva3;
    }
    notaFinal(){
        return (this.eva1+this.eva2+this.eva3);
    }
    estudianteAprobado(){
        if(this.notaFinal()>=48){
            return "aprobado";
        }else{
            return "desaprobado";
    }
}
}