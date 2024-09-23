export class Auto {
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

    getInfoAuto () : any {
        return this.marca, this.modelo, this.color, this.dominio;
    }
}
