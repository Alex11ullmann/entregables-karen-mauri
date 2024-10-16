import { Personaje } from "./personaje";

export class Monje extends Personaje {
    protected atribFuerza: number=25;
    protected atribStamina: number=155;
    protected atribMana: number=25;
    protected atribInt: number=15;
    protected poderDeAtaque: number=1; 
    protected nivelPJ: number = 1;


    constructor (nombrePj: string,  fuerza: number, stamina: number, mana: number, inteligencia: number) {
        super (nombrePj,  fuerza, stamina, mana, inteligencia);
        
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
}