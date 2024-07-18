export default class Cl_Edad {
    constructor(){
        this.mayor = 0;
        this.contPersonas = 0;
        this.acumEdad = 0;
    }

    procesarPersonas(p){
        this.contPersonas++;
        this.acumEdad += p.edad;
        if(p.edad > this.mayor && p.sexo == "F"){
            this.mayor = p.edad;
        }
    }

    promedio(){
        return this.acumEdad / this.contPersonas;
    }   

    mayorEdad(){
        return this.mayor;
    }
}