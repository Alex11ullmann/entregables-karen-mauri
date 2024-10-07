export class Persona {
    protected titular: string;
    protected dni: number;

    constructor(titular : string, dni : number) {
        this.titular = titular;
        this.dni = dni;  
    }

    public getTitular () : string {
        return this.titular;
    }
    public setTitular(nuevoTitular: string) {
        this.titular = nuevoTitular;
    }  
        public getDni () : number {
    return this.dni;
    }
    public setDni(nuevoDni: number) {
        this.dni = nuevoDni;
    }  
}