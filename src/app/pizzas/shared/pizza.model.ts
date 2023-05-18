export class Pizza {
    nombre: string;
    ingredientes: string[];
    precio: number;
    peso: number;

    constructor(nombre: string, ingredientes: string[], precio: number, peso: number) {
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = precio;
        this.peso = peso;
    }
}
