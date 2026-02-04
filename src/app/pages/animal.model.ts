export interface Animal {
    id: number;
    arete: string;
    nombre: string;
    raza: string;
    fechaNacimiento: string;
    padre: string;
    madre: string;
    estado: 'Saludable' | 'En Observación' | 'Tratamiento';
    produccionDiaria: number;
    lote: string;
}
