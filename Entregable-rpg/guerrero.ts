import { Personaje } from "./personaje";

export class Guerrero extends Personaje {
    private poderDeAtaque: number=1; 
    private nivelPJ: number = 1;
    
    constructor (nombrePj: string, atribFuerza: number, atribStamina: number, atribMana: number, atribInt: number) {
        super (nombrePj, atribFuerza, atribStamina, atribMana, atribInt);
        this.atribFuerza = 35;
        this.atribStamina = 225;
        this.atribMana = 0;
        this.atribInt = 0;    
    }
    
    getMostrarNombre () :string {
        return this.nombrePj;
    }
    getGuerrero() :number[] {
        return [this.atribFuerza, this.atribStamina, this.atribMana, this.atribInt];
    }
    getMostrarNivel () : number {
        return this.nivelPJ;
    }
    getMostrarVida () :number {
        return this.atribStamina;
    }
    getMostrarFuerza () :number {
        return this.atribFuerza;
    }
    cambioEnFuerza (sumaAtributos:number) : number {
        this.atribFuerza += sumaAtributos;
        return this.atribFuerza;
    }
    cambioEnStamina (sumaStamina:number) : number {
        this.atribStamina += sumaStamina; 
        return this.atribStamina;
    }
    ataqueComun () :number {
        this.poderDeAtaque = this.atribFuerza;
        console.log ("Has atacado al enemigo y le has restado de su vida: " + this.poderDeAtaque + " puntos");
        return this.poderDeAtaque;
    }
    ataqueEspecial () :number {
        if (this.atribFuerza <= 20) {
            console.log ("No es posible realizar esta tecnica ya que no posees fuerza suficiente! Preparate aqui viene el golpe!");
            return 0;
        } else {
            this.poderDeAtaque = this.atribFuerza * 2; 
            console.log ("Tu personaje ah realizado un ataque especial!");
            console.log ("Le has restado a tu rival un total de vida de: " + this.poderDeAtaque + " puntos");
            return this.poderDeAtaque;
        }
    }
    perdidaDeVida (daño: number) : number {
        this.atribStamina = this.atribStamina - daño;
        return this.atribStamina;
    }
    subeNivel () {
        this.nivelPJ += 1;
        this.atribFuerza += 4;
        this.atribStamina += 10;
        this.atribMana += 0;
        this.atribInt += 1;
    }
    evolucion () {
        this.atribFuerza += 30;
        this.atribStamina += 100;
        this.atribMana += 0;
        this.atribInt += 10;
    }
}