import { Vehiculo } from "./vehiculos";
import { Persona } from "./persona";

export class Registro {
    private arrVehiculos: Vehiculo[];

    constructor (arrVehiculos : Vehiculo[]) {
        this.arrVehiculos = arrVehiculos;
    }

    public agregarVehiculoYTitular(nuevoVehiculos: Vehiculo): void {
        this.arrVehiculos.push (nuevoVehiculos);
        console.log ("El vehiculo con su titular fueron agregados exitosamente!");
    }
    public modificarDatos(vehiculo: Vehiculo, nuevoTipo: string, nuevaMarca: string, nuevoModelo: string, nuevoAnio: number): void {
        vehiculo.tipoVehiculo = nuevoTipo;
        vehiculo.marca = nuevaMarca;
        vehiculo.modelo = nuevoModelo;
        vehiculo.anio = nuevoAnio;
        console.log ("Los datos fueron modificados!");
    }
    public darDeBajaVehiculo(vehiculoADarBaja: Vehiculo): void {
        this.arrVehiculos = this.arrVehiculos.filter (darBaja => darBaja !== vehiculoADarBaja);
        console.log ("Los datos fueron dados de baja!");
    }
}