import { Personaje } from "./personaje";

export class Monje extends Personaje {
    atribFuerza: number=25;
    atribAgilidad: number=10;
    atribStamina: number=15;
    atribMana: number=25;
    atribInt: number=15;

    constructor (nombrePj: string, nivel: number, fuerza: number, agilidad: number, stamina: number, mana: number, inteligencia: number) {
        super (nombrePj, nivel, fuerza, agilidad, stamina, mana, inteligencia);
        this.atribFuerza += fuerza;
        this.atribAgilidad += agilidad;
        this.atribStamina += stamina;
        this.atribMana += mana;
        this.atribInt += inteligencia;
    }

    getMonje() :number[] {
        return [this.atribFuerza, this.atribAgilidad, this.atribStamina, this.atribMana, this.atribInt];
    }

    setAtributos(atribFuerza: number, atribAgilidad: number, atribStamina: number, atribMana: number, atribInt: number): void {
        console.log ("el personaje ah sido modificado");        
    };   

    tieneMagia () :void {
        this.habilidadMagica = true;
    }

    subeNivel () {
        this.nivel += 1;
        this.fuerza += 10;
        this.agilidad += 1;
        this.stamina += 7;
        this.mana += 6;
        this.inteligencia += 6;
    }
}