import { Personaje } from "./personaje";

export class Guerrero extends Personaje {
    atribFuerza: number=35;
    atribAgilidad: number=20;
    atribStamina: number=25;
    atribMana: number=0;
    atribInt: number=0;

    constructor (nombrePj: string, nivel: number, fuerza: number, agilidad: number, stamina: number, mana: number, inteligencia: number) {
        super (nombrePj, nivel, fuerza, agilidad, stamina, mana, inteligencia);
        this.atribFuerza += fuerza;
        this.atribAgilidad += agilidad;
        this.atribStamina += stamina;
        this.atribMana += mana;
        this.atribInt += inteligencia;
    }

    getGuerrero() :number[] {
        return [this.atribFuerza, this.atribAgilidad, this.atribStamina, this.atribMana, this.atribInt];
    }

    setAtributos(atribFuerza: number, atribAgilidad: number, atribStamina: number, atribMana: number, atribInt: number): void {
        console.log ("el personaje ah sido modificado");        
    };   

    subeNivel () {
        this.nivel += 1;
        this.fuerza += 10;
        this.agilidad += 8;
        this.stamina += 10;
        this.mana += 0;
        this.inteligencia += 2;
    }
}