import { RegistroAutomotor } from "./automotor";
import { Transferencia } from "./transferencia";

let transferencia1 :Transferencia = new Transferencia ("fiat", 1987, "rojo", "CZS152", "Pedro Gonzalez", 37845422);

let registro1 :RegistroAutomotor = new RegistroAutomotor ("B");

registro1.aniadirTransferencia ("fiat", 1987, "rojo", "CZS152", "Pedro Gonzalez", 37845422);
registro1.aniadirTransferencia ("Ford", 2010, "azul", "AM 5465 CV", "Marcela Perez", 41546521);

console.log (registro1.getListaTransferidos());

