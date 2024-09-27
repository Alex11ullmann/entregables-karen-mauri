import { RegistroAutomotor } from "./automotor";
import { Transferencia } from "./transferencia";
import { Auto } from "./auto";
import { Moto } from "./moto";
import { Camion } from "./camion";
import { Persona } from "./persona";

let personaNueva1 : Persona = new Persona ("Pancho", 1321254);
let personaNueva2 : Persona = new Persona ("Maria", 31321222);
let personaNueva3 : Persona = new Persona ("German", 18321975);

let vehiculoNuevo1 : Moto = new Moto ("yamaha", 2220, "Roja", "CS 106 AB");
let vehiculoNuevo2 : Auto = new Auto ("Fiat", 2003, "Gris", "CAS 546");
let vehiculoNuevo3 : Moto = new Moto ("Honda", 2217, "Azul", "AB 211 AA");
let vehiculoNuevo4 : Camion = new Camion ("Scania", 1981, "Rojo", "BVV 999");

let transferencia1 :Transferencia = new Transferencia ([personaNueva1, personaNueva3], [vehiculoNuevo2, vehiculoNuevo3, vehiculoNuevo4]);
let transferencia2 :Transferencia = new Transferencia ([personaNueva2], [vehiculoNuevo1]);

let registro1 :RegistroAutomotor = new RegistroAutomotor ("B", [transferencia1, transferencia2]);

console.log (registro1.getListaTransferidos());

let personaNueva5 : Persona = new Persona ("Juliana", 36566912);
let vehiculoNuevo6 : Moto = new Moto ("Gilera", 2002, "Blanca", "SDS 555");
let transferencia3 :Transferencia = new Transferencia ([personaNueva5], [vehiculoNuevo6])

registro1.aniadirTransferencia ([transferencia3]);

console.log (registro1.getListaTransferidos());

