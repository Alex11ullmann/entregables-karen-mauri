import { Personaje } from "./personaje";

export class Mago extends Personaje {
    atribFuerza: number=10;
    atribAgilidad: number=10;
    atribStamina: number=5;
    atribMana: number=35;
    atribInt: number=30;

    constructor (nombrePj: string, nivel: number, fuerza: number, agilidad: number, stamina: number, mana: number, inteligencia: number) {
        super (nombrePj, nivel, fuerza, agilidad, stamina, mana, inteligencia);
        this.atribFuerza += fuerza;
        this.atribAgilidad += agilidad;
        this.atribStamina += stamina;
        this.atribMana += mana;
        this.atribInt += inteligencia;
    }
    getMago() :number[] {
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
        this.fuerza += 1;
        this.agilidad += 4;
        this.stamina += 5;
        this.mana += 10;
        this.inteligencia += 10;
    }
}