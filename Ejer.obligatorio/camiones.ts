export class Camion {
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

    
}