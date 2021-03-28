interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}  

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

const {volumen, segundo, cancion} = reproductor;

console.log(`El volumen actual de: ${volumen}`);
console.log(`El segundo actual de: ${segundo}`);
console.log(`El canción actual de: ${cancion}`);
console.log(`El autor es: ${reproductor.detalles.autor}`);

/*
    ===== Desestructuración de Arreglos =====
*/

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = dbz;

// console.log(`Pj 1: ${p1}`);
// console.log(`Pj 1: ${p2}`);
console.log(`Pj 1: ${p3}`);