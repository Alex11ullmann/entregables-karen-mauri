import { Auto } from "./auto";
import { Camion } from "./camion";
import { Moto } from "./moto";
import { Persona } from "./persona";

export class Transferencia {
    private autos : Auto[];
    private motos : Moto[];
    private camiones : Camion[];
    private personas : Persona[];

    constructor (listaPersonas: Persona[], listaAutos ?: Auto[], listaMotos ?: Moto[], listaCamiones ?: Camion[]) {
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
    //getters
    public getListaPersonas () : Persona [] {
        return this.personas;
    }
    public getListaAutos () : Auto [] {
        return this.autos;
    }
    public getListaMotos () : Moto [] {
        return this.motos;
    }
    public getListaCamiones () : Camion [] {
        return this.camiones;
    }
    //setters
    public setListaPersonas (listaPersonas : Persona) : void {
        this.personas = this.personas;
    }
    public setListaAutos (listaAutos : Auto) : void {
        this.autos = this.autos;
    }
    public setListaMotos (listaMotos : Moto) : void {
        this.motos = this.motos;
    }
    public setListaCamiones (listaCamiones : Camion) : void {
        this.camiones = this.camiones;
    }

    aniadirAuto (marca: string, modelo: number, color: string, dominio: string | number) : void {
        let nuevoAuto : Auto = new Auto (marca,modelo,color,dominio);
        if (!this.autos.some(transf=>
            transf.getMarca() == marca &&
            transf.getModelo() == modelo &&
            transf.getColor() == color &&
            transf.getDominio() == dominio
            )){
                this.autos.push (nuevoAuto);
            }
    }
    aniadirMoto (marca: string, modelo: number, color: string, dominio: string | number) : void {
        let nuevaMoto : Moto = new Moto (marca,modelo,color,dominio);
        if (!this.motos.some(transf=>
            transf.getMarca() == marca &&
            transf.getModelo() == modelo &&
            transf.getColor() == color &&
            transf.getDominio() == dominio
            )){
                this.motos.push (nuevaMoto);
            }
    }
    aniadirCamion (marca: string, modelo: number, color: string, dominio: string | number) : void {
        let nuevoCamion : Camion = new Camion (marca,modelo,color,dominio);
        if (!this.camiones.some(transf=>
            transf.getMarca() == marca &&
            transf.getModelo() == modelo &&
            transf.getColor() == color &&
            transf.getDominio() == dominio
            )){
                this.camiones.push (nuevoCamion);
            }
    }
    aniadirPersona (titular: string, dni: number) : void {
        let nuevaPersona : Persona = new Persona (titular, dni);
        if (!this.personas.some(transf=>
            transf.getTitular() == titular &&
            transf.getDni() == dni 
            )){
                this.personas.push (nuevaPersona);
            }
    }
    
    darDeBajaAuto (autoADarBaja : Auto) :void{
        if (autoADarBaja != undefined && this.autos.includes(autoADarBaja)) {
            this.autos = this.autos.filter (autoADarBaja => autoADarBaja !== autoADarBaja);
        }
    }
    darDeBajaMoto (motoADarBaja : Moto) :void{
        if (motoADarBaja != undefined && this.motos.includes(motoADarBaja)) {
            this.motos = this.motos.filter (motoADarBaja => motoADarBaja !== motoADarBaja);
        }
    }
    darDeBajaCamion (camionADarBaja : Camion) :void{
        if (camionADarBaja != undefined && this.camiones.includes(camionADarBaja)) {
            this.camiones = this.camiones.filter (camionADarBaja => camionADarBaja !== camionADarBaja);
        }
    }
    darDeBajaPersona (personaADarBaja : Persona) :void{
        if (personaADarBaja != undefined && this.personas.includes(personaADarBaja)) {
            this.personas = this.personas.filter (personaADarBaja => personaADarBaja !== personaADarBaja);
        }
    }
}
