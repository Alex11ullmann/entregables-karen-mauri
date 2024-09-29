import { Vehiculo } from "./vehiculos";

export class Camion {
  public listaCamiones: Vehiculo[];
  
  constructor() {
    this.listaCamiones = [];
  }
  
  // Agregar un camion al registro
  public agregarCamion(nuevoCamion: Vehiculo): void {
    this.listaCamiones.push (nuevoCamion);
    console.log ("El camion fue agregado exitosamente!");
  }
  // Modificar un camion existente
  public modificarCamion(camion: Vehiculo, nuevoTitular: string, nuevoDni: number, nuevaMarca: string, nuevoModelo: string, nuevoAnio: number): void {
    camion.titular = nuevoTitular;
    camion.dni = nuevoDni;
    camion.marca = nuevaMarca;
    camion.modelo = nuevoModelo;
    camion.anio = nuevoAnio;
    console.log ("El camion fue modificado!");
  }
  // Método para dar de baja el vehículo
  public darDeBajaVehiculo(camionADarBaja: Vehiculo): void {
    this.listaCamiones = this.listaCamiones.filter (darBaja => darBaja !== camionADarBaja);
    console.log ("El camion fue dado de baja!");
  }
  // Mostrar todos los camiones en el registro
  public mostrarCamiones(): void {
    this.listaCamiones.forEach((camion, index) => {
      console.log(`Camion N° ${index + 1}: ${camion.marca} ${camion.modelo} (${camion.anio})`)
    })
  }
}