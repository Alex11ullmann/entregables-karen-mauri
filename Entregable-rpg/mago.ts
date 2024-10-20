import { Personaje } from "./personaje";

export class Mago extends Personaje {
    private poderDeAtaque: number=1; 
    private nivelPJ: number = 1;

    constructor (nombrePj: string, atribFuerza: number, atribStamina: number, atribMana: number, atribInt: number) {
        super (nombrePj, atribFuerza, atribStamina, atribMana, atribInt);
        this.atribFuerza = 10;
        this.atribStamina = 155;
        this.atribMana = 100;
        this.atribInt = 20    
    }

    getMostrarNombre () :string {
        return this.nombrePj;
    }
    getMago() :number[] {
        return [this.atribFuerza, this.atribStamina, this.atribMana, this.atribInt];
    }  
    getMostrarNivel () : number {
        return this.nivelPJ;
    }
    getMostrarVida () : number {
        return this.atribStamina;
    }
    cambioEnMana (sumaMana:number) : number {
        this.atribMana += sumaMana; 
        return this.atribMana;
    }
    getMostrarMana() : number {
        return this.atribMana;
    }
    ataqueComun () :number {
        this.poderDeAtaque += this.atribFuerza;
        console.log ("Has atacado al enemigo y le has restado de su vida: " + this.poderDeAtaque + " puntos");
        return this.poderDeAtaque;
    }
    ataqueEspecial () :number {
        if (this.atribMana < 25) {
            console.log ("No hay mana, no se puede realizar este ataque! Preparate aqui viene el golpe!");
            return 0;
        } else {
            this.atribMana = this.atribMana - 25;
            this.poderDeAtaque = this.atribInt * 2;
            console.log ("Tu personaje ah realizado un ataque especial!");
            console.log ("Le has restado a tu rival un total de vida de: " + this.poderDeAtaque + " puntos");
            return this.poderDeAtaque;
        }
    }
    perdidaDeVida (daño: number) : number {
        this.atribStamina = this.atribStamina - daño;
        return this.atribStamina;
    }
    subeNivel () :void {
        this.nivelPJ += 1;
        this.atribFuerza += 1;
        this.atribStamina += 5;
        this.atribMana += 10;
        this.atribInt += 3;
    }
    evolucion () :void {
        this.atribFuerza += 10;
        this.atribStamina += 50;
        this.atribMana += 50;
        this.atribInt += 30;
    }
}