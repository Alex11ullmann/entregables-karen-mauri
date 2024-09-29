import { Vehiculo } from "./vehiculos";

export class Moto {
  public listaMotos: Vehiculo[];
  
  constructor() {
    this.listaMotos = [];
  }
  
  // Agregar un moto al registro
  public agregarMoto(nuevaMoto:Vehiculo): void {
    this.listaMotos.push (nuevaMoto);
    console.log ("La moto fue agregada exitosamente!");
  }
  // Modificar una moto existente
  public modificarMoto(moto: Vehiculo, nuevoTitular: string, nuevoDni: number, nuevaMarca: string, nuevoModelo: string, nuevoAnio: number): void {
    moto.titular = nuevoTitular;
    moto.dni = nuevoDni;
    moto.marca = nuevaMarca;
    moto.modelo = nuevoModelo;
    moto.anio = nuevoAnio;
    console.log ("La Moto fue modificada!");
  }
  // Método para dar de baja el vehículo
  public darDeBajaVehiculo(motoADarBaja: Vehiculo): void {
    this.listaMotos = this.listaMotos.filter (darBaja=> darBaja !== motoADarBaja);
    console.log ("La Moto fue dada de baja!");
  }
  // Mostrar todos las motos en el registro
  public mostrarMotos(): void {
    this.listaMotos.forEach((listaMotos, index) => {
      console.log(`Moto N° ${index + 1}: ${listaMotos.marca} ${listaMotos.modelo} (${listaMotos.anio})`)
    })
  }
}