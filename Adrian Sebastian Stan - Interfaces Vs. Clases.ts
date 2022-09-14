// Punto 1
class Producto {
    constructor(public nombre: string, public precio: number, public oferta?: boolean) {
        this.oferta ??= false;
    }
}

// Punto 2
class Persona {
    private _nombre!: string;
    private _edad!: number;
    private _dni!: string;
    private _domicilio!: string;

    constructor() {
        this.nombre = "";
        this.edad = 0;
        this.dni = "";
        this.domicilio = "";
    }

    mostrarInformacion(): void {
        console.log(this);
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(value: string) {
        this._nombre = value;
    }

    get edad(): number {
        return this._edad;
    }

    set edad(value: number) {
        this._edad = value;
    }

    get dni(): string {
        return this._dni;
    }

    set dni(value: string) {
        this._dni = value;
    }

    get domicilio(): string {
        return this._domicilio;
    }

    set domicilio(value: string) {
        this._domicilio = value;
    }
}

// Punto 1
let productos: Producto[] = [
    new Producto("Camisa", 60),
    new Producto("Pantalones", 45, true),
    new Producto("Polo", 45, true),
    new Producto("Slip", 45, true),
];

function muestraProductos(productos: Producto[]) {
    for (const producto of productos) {
        console.log(producto);
    }
}

function ordenaProductos(productos: Producto[]) {
    productos.sort(x => x.precio);
    productos.reverse();
}

// Punto 2
let usuario1: Persona = new Persona();
let usuario2: Persona = new Persona();

usuario1.mostrarInformacion();
usuario2.mostrarInformacion();

// Punto 3
class Cafetera {
    private _cantidadMaxima!: number;
    private _cantidadActual!: number;

    constructor() {
        this.cantidadMaxima = 1000;
        this.cantidadActual = 0;
    }

    llenarCafetera() {
        this.cantidadActual = this.cantidadMaxima;
    }

    servirTaza(cantidad: number) {
        this.cantidadActual = Math.min(cantidad, this.cantidadActual);
    }

    vaciarCafetera() {
        this.cantidadActual = 0;
    }

    agregarCafe(cantidad: number) {
        this.cantidadActual += cantidad;
    }

    get cantidadMaxima(): number {
        return this._cantidadMaxima;
    }

    set cantidadMaxima(value: number) {
        this._cantidadMaxima = value;
    }

    get cantidadActual(): number {
        return this._cantidadActual;
    }

    set cantidadActual(value: number) {
        this._cantidadActual = value;
    }
}
