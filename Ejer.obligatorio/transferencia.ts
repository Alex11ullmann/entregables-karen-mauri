export class Transferencia {
    private marca: string;
    private modelo: number;
    private color: string;
    private dominio: string | number;
    private titular : string;
    private dni : number;

    constructor (marca: string, modelo: number, color: string, dominio: string | number, titular : string, dni : number) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.dominio = dominio;
        this.titular = titular;
        this.dni = dni;
    }
    //getters
    public getMarca () : string {
        return this.marca;
    }
    public getModelo () : number {
        return this.modelo;
    }
    public getColor () : string {
        return this.color;
    }
    public getDominio () : string | number {
        return this.dominio;
    }
    public getTitular () : string {
        return this.titular;
    }
    public getDni () : number {
        return this.dni;
    }
    //setters
    public setMarca (marca: string) : void {
        this.marca = marca;
    }
    public setModelo (modelo: number) : void {
        this.modelo = modelo;
    }
    public setColor (color: string) : void {
        this.color = color;
    }
    public setDominio (dominio: string | number) : void {
        this.dominio = dominio;
    }
    setTitular (titular:string) : void {
        this.titular = titular;
    }
    setDni (dni:number) : void {
        this.dni = dni;
    }
}
