import { Auto } from "./auto";
import { Moto } from "./moto";
import { Camion } from "./camion";
import { Persona } from "./persona";
import { Transferencia } from "./transferencia";

export class RegistroAutomotor {
    private sucursal : string;
    private listaTransferidos : Transferencia[];

    constructor (sucursal : string, listaTransferidos:Transferencia[]) {
        this.sucursal = sucursal;
        if (listaTransferidos != undefined) {
            this.listaTransferidos = listaTransferidos;
        } else {
            this.listaTransferidos = [];
        }
    }
    //getters
    getSucursal () :string {
        return this.sucursal;
    }
    getListaTransferidos () :Transferencia[] {
        return this.listaTransferidos;
    }
    //setters
    setSucursal (sucursal :string) :void{
        this.sucursal = sucursal;
    }
    setListaTransferidos (listaTransferidos :Transferencia []) :void{
        this.listaTransferidos = listaTransferidos;
    }
}

let personaNueva1 : Persona = new Persona ("German", 18321975);
let vehiculoNuevo1 : Moto = new Moto ("yamaha", 2220, "Roja", "CS 106 AB");
let transferencia1 :Transferencia = new Transferencia ([personaNueva1], [vehiculoNuevo1]);

let personaNueva2 : Persona = new Persona ("Pepe", 18321975);
let vehiculoNuevo2 : Moto = new Moto ("Honda", 2220, "Roja", "CS 106 AB");
let transferencia2 :Transferencia = new Transferencia ([personaNueva2], [vehiculoNuevo2]);

console.log (transferencia1, transferencia2);

let registro1 : RegistroAutomotor = new RegistroAutomotor ("B", [transferencia1, transferencia2]);

console.log (registro1);