export abstract class Personaje {
    protected nombrePj: string;
    
    protected fuerza: number;
    protected stamina: number;
    protected mana: number;
    protected inteligencia: number;

    constructor (nombrePj: string, fuerza: number, stamina: number, mana: number, inteligencia: number) {
        this.nombrePj = nombrePj;
        this.fuerza = 0;
        this.stamina = 0;
        this.mana = 0;
        this.inteligencia = 0;
    }

    abstract getMostrarNombre () :string;
    abstract ataqueComun () :number;
    abstract ataqueEspecial () :number;
    abstract perdidaDeVida (daño :number) :number;
    abstract getMostrarVida () :number;
     
}