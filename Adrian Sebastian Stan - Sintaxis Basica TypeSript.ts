// Punto 1
function plantarArboles(cantidad, tipo) {
    console.log(`${cantidad} ${tipo} han sido plantados.`);
}

// Punto 2
function plantarArboles(cantidad: number, tipo: string): void {
    console.log(`${cantidad} ${tipo} han sido plantados.`);
}

// Punto 3
function obtenerAleatorio(max: number, min?: number | undefined): number {
    min ??= 0;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Punto 4
const palabras: string[] = ["murcielago", "microondas", "superdomesticos"];

palabras.forEach(palabra => {
    if (palabra.length % 2 === 0) {
        console.log(palabra.toUpperCase());
    } else {
        console.log(palabra);
    }
});
