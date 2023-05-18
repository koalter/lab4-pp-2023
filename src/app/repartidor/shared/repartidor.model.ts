export class Repartidor {
    dni: number;
    nombre: string;
    apellido: string;
    edad: number;
    nacionalidad: string;
    capacidad: number;
    unidadPropia: boolean;

    constructor(dni: number, nombre: string, apellido: string, edad: number, nacionalidad:string, capacidad: number, unidadPropia: boolean) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.nacionalidad = nacionalidad;
        this.capacidad = capacidad;
        this.unidadPropia = unidadPropia;
    }
}
