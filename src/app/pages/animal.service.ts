import { Injectable } from '@angular/core';
import { Animal } from './animal.model';
import { BehaviorSubject, Observable,map } from 'rxjs';
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
      sexo: 'Hembra' // <--- Añade esto
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
      sexo: 'Hembra' // <--- Añade esto
    },
    {
      id: 3,
      arete: '01 5555 4444',
      nombre: 'Clementina',
      raza: 'Jersey',
      fechaNacimiento: '2020-02-10',
      padre: 'Semental A',
      madre: 'Mora',
      estado: 'Preñada',
      produccionDiaria: 22,
      lote: 'Reproducción',
      sexo: 'Hembra',
      fechaUltimoServicio: '2025-05-15',
      fechaPartoEstimada: '2026-02-22' // Fecha próxima
    }
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

  getGanadoSync(): Animal[] {
    return this.ganado;
  }

  getCrias(): Observable<Animal[]> {
    return this.getGanado().pipe(
      map(animales => animales.filter(a => a.lote === 'Novillas' || a.produccionDiaria === 0))
    );
  }

  // Filtrar vacas próximas a parir (fecha estimada en los próximos 30 días)
  getProximosPartos(): Observable<Animal[]> {
    return this.getGanado().pipe(
      map(animales => animales.filter(a => {
        if (!a.fechaPartoEstimada) return false;
        const hoy = new Date();
        const fechaParto = new Date(a.fechaPartoEstimada);
        const diferenciaDias = (fechaParto.getTime() - hoy.getTime()) / (1000 * 3600 * 24);
        return diferenciaDias <= 30 && diferenciaDias >= -5; // 30 días antes hasta 5 después
      }))
    );
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
