import { Registro } from "./registro";
import { Vehiculo } from "./vehiculos";

let vehiculo1 : Vehiculo = new Vehiculo ("Moto", "Gilera", "Urbana", 2010, "Franco", 37032451);
let vehiculo2 : Vehiculo = new Vehiculo ("Auto", "Fiat", "Rural", 2024, "Raul", 21051111);
let vehiculo3 : Vehiculo = new Vehiculo ("Camion", "Scania", "Carguero", 2000, "Jimena", 9245351);
let vehiculo4 : Vehiculo = new Vehiculo ("Camion", "Audi", "Correr", 2025, "Colapinto", 31553555);
let arrVehiculos: Vehiculo[]=[vehiculo1, vehiculo2, vehiculo3];

let Registro1 : Registro = new Registro (arrVehiculos);
console.log (Registro1);
console.log ("Finalizada la primera parte");

Registro1.agregarVehiculoYTitular (vehiculo4);
Registro1.darDeBajaVehiculo (vehiculo1);
Registro1.modificarDatos (vehiculo2, "Moto", "Yamaha", "Enduro", 1992);

console.log (Registro1);
console.log ("Finalizado");

