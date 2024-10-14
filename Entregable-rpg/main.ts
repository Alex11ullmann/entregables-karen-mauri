import * as rls from "readline-sync";
import { Mago } from "./mago";
import { Guerrero } from "./guerrero";
import { Ladron } from "./ladron";
import { Monje } from "./monje";

let nombrePer = rls.question ("Ingrese el nombre del personaje a crear: ");
let respuesta :number;

do {
    respuesta = rls.questionInt ("Ingrese que personaje desea crear: 1 = MAGO, 2 = GUERREO, 3 = LADRON o 4 = MONJE, elija: ");
    if (respuesta == 1) {
        let personajeCreado : Mago = new Mago (nombrePer, 0, 0, 0, 0, 0, 0);
        console.log ("Su personaje es un mago y fue creado correctamente");
    } else if (respuesta == 2) {
        let personajeCreado : Guerrero = new Guerrero (nombrePer, 0, 0, 0, 0, 0, 0);
        console.log ("Su personaje es un Guerrero y fue creado correctamente");
    } else if (respuesta == 3) {
        let personajeCreado : Ladron = new Ladron (nombrePer, 0, 0, 0, 0, 0, 0);
        console.log ("Su personaje es un Ladron y fue creado correctamente");
    } else if (respuesta == 4) {
        let personajeCreado : Monje = new Monje (nombrePer, 0, 0, 0, 0, 0, 0);
        console.log ("Su personaje es un Monje y fue creado correctamente");
    } else {
    console.log ("Ingreso un valor incorrecto, vuelva a seleccionar una opcion: ");
    }
} while (respuesta !== 1 && respuesta !== 2 && respuesta !== 3 && respuesta !== 4);

//console.log ("fin");

