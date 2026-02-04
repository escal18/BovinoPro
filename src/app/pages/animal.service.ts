import { Injectable } from '@angular/core';
import { Animal } from './animal.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { RegistroSalud } from './salud.model';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  private ganado: Animal[] = [
    {
      id: 1,
      arete: '01 2345 6789',
      nombre: 'Lucero',
      raza: 'Holstein',
      fechaNacimiento: '2022-05-10',
      padre: 'King Doc',
      madre: 'Lucera 1',
      estado: 'Saludable',
      produccionDiaria: 32.5,
      lote: 'Ordeña',
    },
    {
      id: 2,
      arete: '01 9876 5432',
      nombre: 'Estrella',
      raza: 'Holstein',
      fechaNacimiento: '2021-08-15',
      padre: 'Hizmet',
      madre: 'Luna',
      estado: 'En Observación',
      produccionDiaria: 28.1,
      lote: 'Ordeña',
    },
  ];

  private ganadoSubject = new BehaviorSubject<Animal[]>(this.ganado);

  constructor() {}

  getGanado(): Observable<Animal[]> {
    return this.ganadoSubject.asObservable();
  }

  agregarAnimal(animal: Animal) {
    this.ganado.push(animal);
    this.ganadoSubject.next(this.ganado);
  }

actualizarAnimal(animalActualizado: Animal) {
  const index = this.ganado.findIndex(a => a.id === animalActualizado.id);
  if (index !== -1) {
    this.ganado[index] = animalActualizado;
    this.ganadoSubject.next(this.ganado);
  }
}

private registrosSalud: RegistroSalud[] = [
    {
        id: 1,
        areteAnimal: '01 2345 6789',
        tipo: 'Vacuna',
        nombreMedicamento: 'Derriengue / Rabia',
        fechaAplicacion: '2026-01-15',
        proximaDosis: '2027-01-15',
        veterinario: 'Dr. Martínez',
        motivo: 'Sin reacciones adversas.'
    }
];

getSaludPorAnimal(arete: string): RegistroSalud[] {
    return this.registrosSalud.filter(r => r.areteAnimal === arete);
}

agregarRegistroSalud(nuevo: RegistroSalud) {
    this.registrosSalud.push(nuevo);
}
}
