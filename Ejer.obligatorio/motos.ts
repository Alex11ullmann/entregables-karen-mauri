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
    
    getInfomoto () : any {
        return this.marca, this.modelo, this.color, this.dominio;
    }

    setModificarDatosMoto (marca: string, modelo: number, color: string, dominio: string | number){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.dominio = dominio;
    }

    eliminarMoto (marca: string, modelo: number, color: string, dominio: string | number) {
        this.marca = "";
        this.modelo = 0;
        this.color = "";
        this.dominio = "";
    }
}