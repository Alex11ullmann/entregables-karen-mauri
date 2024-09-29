export class Vehiculo {
  public titular: string;
  public dni: number;
  public marca: string;
  public modelo: string;
  public anio: number;
  
  constructor(titular : string, dni : number, marca: string, modelo: string, anio: number) {
    this.titular = titular;
    this.dni = dni;  
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
  }

  // Getters y setters
  public getTitular () : string {
    return this.titular;
  }
  public setTitular(nuevoTitular: string) {
    this.titular = nuevoTitular;
  }  
  public getDni () : number {
    return this.dni;
  }
  public setDni(nuevoDni: number) {
    this.dni = nuevoDni;
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
