export class Persona {
    titular : string;
    dni : number;

    constructor (titular : string, dni : number) {
        this.titular = titular;
        this.dni = dni;
    }

    getInfoAuto () : any {
        return this.titular, this.dni;
    }
}