export class Persona {
    titular : string;
    dni : number;

    constructor (titular : string, dni : number) {
        this.titular = titular;
        this.dni = dni;
    }

    //getters
    public getTitular () : string {
        return this.titular;
    }
    public getDni () : number {
        return this.dni;
    }
    //setters
    public setTitular (titular:string) : void {
        this.titular = titular;
    }
    public setDni (dni:number) : void {
        this.dni = dni;
    }
}