export class Enemigo {
    protected nombreEnemigo: string;
    protected fuerza: number=10;
    protected stamina: number=100;
    protected poderDeAtaque: number=1*this.fuerza; 
    

    constructor (nombreEnemigo: string) {
        this.nombreEnemigo = nombreEnemigo;
    } 

    getMostrarVida () :number {
        return this.stamina;
    }
    getMostrarNombre () :string {
        return this.nombreEnemigo;
    }
    ataqueComun () :number {
        this.poderDeAtaque = this.fuerza;
        console.log ("El enemigo te ah atacado y te quito de tu vida: " + this.poderDeAtaque + " puntos");
        return this.poderDeAtaque;
    }

    perdidaDeVida (daño: number) : number {
        this.stamina = this.stamina - daño;
        return this.stamina;
    }

    restaurarVida () : void {
        this.stamina = 100;
    }
}