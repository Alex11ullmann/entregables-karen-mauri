import { Persona } from "./persona";

export class Vehiculo extends Persona {
  tipoVehiculo: string;
  marca: string;
  modelo: string;
  anio: number;

  constructor (tipoVehiculo: string, marca: string, modelo: string, anio: number, titular : string, dni: number) {
    super (titular, dni);
    this.tipoVehiculo = tipoVehiculo;
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
  }

  public getTipoVehiculo(): string {
    return this.tipoVehiculo;
  }
  public setTipoVehiculo(tipoVehiculo: string) {
    this.tipoVehiculo = tipoVehiculo;
  }  
  public getMarca(): string {
    return this.marca;
  }
  public setMarca(nuevaMarca: string) {
    this.marca = nuevaMarca;
  }  
  public getModelo(): string {
    return this.modelo;
  }
  public setModelo(nuevoModelo: string) {
    this.modelo = nuevoModelo;
  }
  public getAnio(): number {
    return this.anio;
  }
  public setAnio(nuevoAnio: number) {
    this.anio = nuevoAnio;
  }

}
