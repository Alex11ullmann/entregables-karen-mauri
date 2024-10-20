/*
- utilizar herencia y polimorfismo.
- Los personajes tendrán características y habilidades únicas.
- Algunos podrán evolucionar a versiones mejoradas con nuevas habilidades.
- Encontrar caja mágica.
*/

export abstract class Personaje {
    protected nombrePj: string;
    protected atribFuerza: number;
    protected atribStamina: number;
    protected atribMana: number;
    protected atribInt: number;

    constructor (nombrePj: string, atribFuerza: number, atribStamina: number, atribMana: number, atribInt: number) {
        this.nombrePj = nombrePj;
        this.atribFuerza = 0;
        this.atribStamina = 0;
        this.atribMana = 0;
        this.atribInt = 0;
    }

    abstract getMostrarNombre () :string;
    abstract getMostrarNivel () : number;
    abstract getMostrarVida () :number;
    abstract ataqueComun () :number;
    abstract ataqueEspecial () :number;
    abstract perdidaDeVida (daño :number) :number;
    abstract evolucion () :void;
    abstract subeNivel () :void;
}