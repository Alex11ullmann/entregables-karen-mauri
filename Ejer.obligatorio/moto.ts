export class Moto {
    marca: string;
    modelo: number;
    color: string;
    dominio: string | number;

    constructor (marca: string, modelo: number, color: string, dominio: string | number) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.dominio = dominio;
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
    //setters
    public setDominio (dominio: string | number) : void {
        this.dominio = dominio;
    }
    public setMarca (marca: string) : void {
        this.marca = marca;
    }
    public setModelo (modelo: number) : void {
        this.modelo = modelo;
    }
    public setColor (color: string) : void {
        this.color = color;
    }
}