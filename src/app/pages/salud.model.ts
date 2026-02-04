export interface RegistroSalud {
    id?: number;
    areteAnimal: string;
    nombreAnimal?: string; // Opcional para mostrar en la lista
    tipo: 'Vacuna' | 'Medicamento' | 'Desparasitante' | 'Tratamiento';
    nombreMedicamento: string;
    fechaAplicacion: string;
    motivo: string; // El "por qué"
    veterinario: string;
    proximaDosis?: string;
}