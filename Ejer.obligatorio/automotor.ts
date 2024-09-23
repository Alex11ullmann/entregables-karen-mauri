import { Auto } from "./autos";
import { Moto } from "./motos";
import { Camion } from "./camiones";
import { Persona } from "./persona";

class RegistroAutomotor {
    autos : Auto[];
    motos : Moto[];
    camiones : Camion[];
    personas : Persona[];
    
    //arrayVehiculoCreado : string[];

    constructor (listaAutos?:Auto[], listaMotos?:Moto[], listaCamiones?:Camion[], listaPersonas?:Persona[]) {
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
        if (listaPersonas != undefined) {
            this.personas = listaPersonas;
        } else {
            this.personas = [];
        }
    }
    
    aniadirAuto (persona : Persona, auto : Auto) : void {
        this.personas.push (persona);
        this.autos.push (auto);
    }
    aniadirMoto (persona : Persona, moto : Moto) : void {
        this.personas.push (persona);
        this.motos.push (moto);
    }
    aniadirCamion (persona : Persona, camion : Camion) : void {
        this.personas.push (persona);
        this.camiones.push (camion);
    }

    darDeBajaVehiculo (persona : Persona) {
        this.personas = this.personas.filter (personaABuscar => personaABuscar !== persona);
        console.log ("Se elimino el vehiculo seleccionado");
    }

    setModificarDatosVehiculo (marca: string, modelo: number, color: string, dominio: string | number){
        
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.dominio = dominio;
    }
}