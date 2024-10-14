export class Personaje {
    protected nombrePj: string;
    protected nivel: number;
    protected fuerza: number;
    protected agilidad: number;
    protected stamina: number;
    protected mana: number;
    protected inteligencia: number;
    protected habilidadMagica: boolean;

    constructor (nombrePj: string, nivel: number, fuerza: number, agilidad: number,stamina: number,mana: number,inteligencia: number) {
        this.nombrePj = nombrePj;
        this.nivel = 1;
        this.fuerza = 0;
        this.agilidad = 0;
        this.stamina = 0;
        this.mana = 0;
        this.inteligencia = 0;
        this.habilidadMagica = false;
    }

    tieneMagia () :void {
        this.habilidadMagica = true;
    }

    subeNivel () {
        this.nivel = 1;
        this.fuerza = 0;
        this.agilidad = 0;
        this.stamina = 0;
        this.mana = 0;
        this.inteligencia = 0;
    }
}