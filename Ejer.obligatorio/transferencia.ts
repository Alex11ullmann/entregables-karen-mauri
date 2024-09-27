import { Auto } from "./auto";
import { Camion } from "./camion";
import { Moto } from "./moto";
import { Persona } from "./persona";

export class Transferencia {
    private autos : Auto[];
    private motos : Moto[];
    private camiones : Camion[];
    private personas : Persona[];

    constructor (listaPersonas ?: Persona[], listaAutos ?: Auto[], listaMotos ?: Moto[], listaCamiones ?: Camion[]) {
        if (listaPersonas != undefined) {
            this.personas = listaPersonas;
        } else {
            this.personas = [];
        }
        if (listaAutos != undefined) {
            this.autos = listaAutos;
        } else {
            this.autos = [];
        }
        if (listaMotos != undefined) {
            this.motos = listaMotos;
        } else {
            this.motos = [];
        }
        if (listaCamiones != undefined) {
            this.camiones = listaCamiones;
        } else {
            this.camiones = [];
        }
    }
}
