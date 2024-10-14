import { Personaje } from "./personaje";

export class Ladron extends Personaje {
    atribFuerza: number=15;
    atribAgilidad: number=45;
    atribStamina: number=10;
    atribMana: number=0;
    atribInt: number=20;

    constructor (nombrePj: string, nivel: number, fuerza: number, agilidad: number, stamina: number, mana: number, inteligencia: number) {
        super (nombrePj, nivel, fuerza, agilidad, stamina, mana, inteligencia);
        this.atribFuerza += fuerza;
        this.atribAgilidad += agilidad;
        this.atribStamina += stamina;
        this.atribMana += mana;
        this.atribInt += inteligencia;
    }

    getLadron() :number[] {
        return [this.atribFuerza, this.atribAgilidad, this.atribStamina, this.atribMana, this.atribInt];
    }

    setAtributos(atribFuerza: number, atribAgilidad: number, atribStamina: number, atribMana: number, atribInt: number): void {
        console.log ("el personaje ah sido modificado");        
    };   

     subeNivel () {
        this.nivel += 1;
        this.fuerza += 6;
        this.agilidad += 16;
        this.stamina += 3;
        this.mana += 0;
        this.inteligencia += 5;
    }
}