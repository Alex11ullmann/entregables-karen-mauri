import { Personaje } from "./personaje";

export class Monje extends Personaje {
    private poderDeAtaque: number=1; 
    private nivelPJ: number = 1;


    constructor (nombrePj: string, atribFuerza: number, atribStamina: number, atribMana: number, atribInt: number) {
        super (nombrePj, atribFuerza, atribStamina, atribMana, atribInt);
        this.atribFuerza = 25;
        this.atribStamina = 155;
        this.atribMana = 25;
        this.atribInt = 15;    
    }

    getMostrarNombre () :string {
        return this.nombrePj;
    }
    getMonje() :number[] {
        return [this.atribFuerza, this.atribStamina, this.atribMana, this.atribInt];
    }  
    getMostrarNivel () : number {
        return this.nivelPJ;
    }
    getMostrarVida () : number {
        return this.atribStamina;
    }
    cambioEnStamina (sumaStamina:number) : number {
        this.atribStamina += sumaStamina; 
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
        this.poderDeAtaque = this.atribInt + this.atribFuerza;
        console.log ("Has atacado al enemigo y le has restado de su vida: " + this.poderDeAtaque + " puntos");
        return this.poderDeAtaque;
    }

    ataqueEspecial () :number {
        if (this.atribMana <= 40) {
            console.log ("No hay mana, no se puede realizar este ataque!  Preparate aqui viene el golpe!");
            return 0;
        } else {
            this.atribMana = this.atribMana - 40;
            this.poderDeAtaque = this.atribInt;
            this.atribStamina = this.atribStamina + 40;
            console.log ("Tu personaje ah realizado un ataque magico!");    
            console.log ("Le has restado a tu rival un total de vida de: " + this.poderDeAtaque + " puntos");
            return this.poderDeAtaque;
        };
    }

    perdidaDeVida (daño: number) : number {
        this.atribStamina = this.atribStamina - daño;
        return this.atribStamina;
    }

    subeNivel () {
        this.nivelPJ += 1;
        this.atribFuerza += 3;
        this.atribStamina += 10;
        this.atribMana += 8;
        this.atribInt += 5;
    }
    evolucion () {
        this.atribFuerza += 15;
        this.atribStamina += 30;
        this.atribMana += 30;
        this.atribInt += 20;
    }
}