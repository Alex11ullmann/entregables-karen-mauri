import { Vehiculo } from "./vehiculos";
import { Auto } from "./auto";
import { Moto } from "./moto";
import { Camion } from "./camion";

//seccio autos
let registroAuto : Auto = new Auto ();
let auto1 = new Vehiculo("Roberto Perez", 22546881, "yamaha", "Chopera", 2000);
let auto2 = new Vehiculo("Camila Gallo", 35468101, "Honda", "Enduro", 2020);
let auto3 = new Vehiculo("Jesus Gonzalez", 9654331, "Gilera", "Urbano", 1998);

registroAuto.agregarAuto (auto1);
registroAuto.agregarAuto (auto2);
registroAuto.agregarAuto (auto3);

registroAuto.modificarAuto(auto2, "Camilo Gallo", 21468000, "Honda", "Enduro", 2022);

registroAuto.darDeBajaVehiculo(auto3);

registroAuto.mostrarAutos();

console.log ("Finalizado");

//seccio motos
let registroMoto : Moto = new Moto ();
let moto1 = new Vehiculo("Pepe Mansilla", 42546111, "yamaha", "Chopera", 2000);
let moto2 = new Vehiculo("Camila Gallo", 35468101, "Honda", "Enduro", 2020);
let moto3 = new Vehiculo("Jesus Gonzalez", 9654331, "Gilera", "Urbano", 1998);
let moto4 = new Vehiculo("Marta Misticas", 15654877, "Honda", "Urbano", 2001);
let moto5 = new Vehiculo("Ramon Gonzalez", 21554568, "Bajaj", "Chopera", 2001);

registroMoto.agregarMoto (moto1);
registroMoto.agregarMoto (moto2);
registroMoto.agregarMoto (moto3);
registroMoto.agregarMoto (moto4);
registroMoto.agregarMoto (moto5);

registroMoto.modificarMoto(moto4, "Roberta Gallo", 21468000, "Yamaha", "Chopera", 2022);

registroMoto.darDeBajaVehiculo(moto3);

registroMoto.mostrarMotos();

console.log ("Finalizado");

//seccio camiones
let registroCamiones : Camion = new Camion ();
let camion1 = new Vehiculo("Martin Martinez", 42546881, "yamaha", "Chopera", 2000);
let camion2 = new Vehiculo("Camila Gallo", 35468101, "Honda", "Enduro", 2020);
let camion3 = new Vehiculo("Jesus Gonzalez", 9654331, "Gilera", "Urbano", 1998);

registroCamiones.agregarCamion (camion1);
registroCamiones.agregarCamion (camion2);
registroCamiones.agregarCamion (camion3);

registroCamiones.modificarCamion(camion3, "Marcos Galli", 21468000, "Honda", "Enduro", 1920);

registroCamiones.darDeBajaVehiculo(camion1);

registroCamiones.mostrarCamiones();

console.log ("Finalizado");

