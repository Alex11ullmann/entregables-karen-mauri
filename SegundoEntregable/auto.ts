import { Vehiculo } from "./vehiculos";

export class Auto {
  public listaAutos: Vehiculo[];
  
  constructor() {
    this.listaAutos = [];
  }
  
  // Agregar un auto al registro
  public agregarAuto(nuevoAuto: Vehiculo): void {
    this.listaAutos.push (nuevoAuto);
    console.log ("El auto fue agregado exitosamente!");
  }
  // Modificar un auto existente
  public modificarAuto(auto: Vehiculo, nuevoTitular: string, nuevoDni: number, nuevaMarca: string, nuevoModelo: string, nuevoAnio: number): void {
    auto.titular = nuevoTitular;
    auto.dni = nuevoDni;
    auto.marca = nuevaMarca;
    auto.modelo = nuevoModelo;
    auto.anio = nuevoAnio;
    console.log ("El auto fue modificado!");
  }
  // Método para dar de baja el vehículo
  public darDeBajaVehiculo(autoADarBaja: Vehiculo): void {
    this.listaAutos = this.listaAutos.filter (darBaja => darBaja !== autoADarBaja);
    console.log ("El auto fue dado de baja!");
  }
  // Mostrar todos los autos en el registro
  public mostrarAutos(): void {
    this.listaAutos.forEach((auto, index) => {
      console.log(`Auto N° ${index + 1}: ${auto.marca} ${auto.modelo} (${auto.anio})`)
    })
  }
}