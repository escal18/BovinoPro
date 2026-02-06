export interface Animal {
    id: number;
    arete: string;
    nombre: string;
    raza: string;
    fechaNacimiento: string;
    padre: string;
    madre: string;
    estado: 'Saludable' | 'En Observación' | 'Tratamiento' | 'Preñada';
    produccionDiaria: number;
    lote: string;
    // Nuevos campos para nacimientos
    sexo: 'Macho' | 'Hembra';
    pesoAlNacer?: number;
    facilidadParto?: 'Normal' | 'Asistido' | 'Cesárea' | 'Distócico';
    vigor?: number; // Escala 1-5
    colostroRecibido?: boolean;
    desinfeccionOmbligo?: boolean;
    fechaUltimoServicio?: string; 
    fechaPartoEstimada?: string;
}