import { Auto } from "./auto";
import { Moto } from "./moto";
import { Camion } from "./camion";
import { Persona } from "./persona";
import { Transferencia } from "./transferencia";

export class RegistroAutomotor {
    private listaTransferidos : Transferencia[];
    private sucursal : string;

    constructor (sucursal : string, listaTransferidos?:Transferencia[]) {
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
    //metodos
    aniadirTransferencia (transferencia : Transferencia[]) : void {
        let personaNueva1 : Persona = new Persona ("Jose", 42546554);
        let vehiculoNuevo1 : Moto = new Moto ("yamaha", 2220, "Roja", "CS 106 AB");
        
        let transferenciaNueva : Transferencia = new Transferencia ([personaNueva1], [vehiculoNuevo1]);
        // if (!this.listaTransferidos.some(transf=>
        //     transf.getMarca() == marca &&
        //     transf.getModelo() == modelo &&
        //     transf.getColor() == color &&
        //     transf.getDominio() == dominio &&
        //     transf.getTitular() == titular &&
        //     transf.getDni() == dni)
        //     ){
        //         this.listaTransferidos.push (transferenciaNueva);
        //     }
    }
    darDeBajaTrasferido (trasferenciaADarBaja :Transferencia) :void{
        if (trasferenciaADarBaja != undefined && this.listaTransferidos.includes(trasferenciaADarBaja)) {
            this.listaTransferidos = this.listaTransferidos.filter (trasferenciaADarBaja => trasferenciaADarBaja !== trasferenciaADarBaja);
        }
    }
}