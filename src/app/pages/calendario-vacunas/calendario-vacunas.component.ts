import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimalService } from '../animal.service';
import { RegistroSalud } from '../salud.model';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-calendario-vacunas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calendario-vacunas.component.html',
  styleUrl: './calendario-vacunas.component.css'
})
export class CalendarioVacunasComponent implements OnInit {
  historial: RegistroSalud[] = [];
  listaAnimales: Animal[] = [];
  mostrarFormulario = false;

  // Modelo para el nuevo registro
  nuevoRegistro: RegistroSalud = {
    areteAnimal: '',
    tipo: 'Vacuna',
    nombreMedicamento: '',
    fechaAplicacion: new Date().toISOString().split('T')[0],
    motivo: '',
    veterinario: ''
  };

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.animalService.getGanado().subscribe(data => this.listaAnimales = data);
    // Cargar historial inicial (Simulado)
    this.historial = [
      {
        areteAnimal: '01 2345',
        tipo: 'Medicamento',
        nombreMedicamento: 'Oxitetraciclina',
        fechaAplicacion: '2026-02-01',
        motivo: 'Infección respiratoria leve',
        veterinario: 'Dr. Salas'
      }
    ];
  }

  guardarRegistro() {
    if (this.nuevoRegistro.areteAnimal && this.nuevoRegistro.nombreMedicamento) {
      this.historial.unshift({ ...this.nuevoRegistro, id: Date.now() });
      this.resetForm();
      this.mostrarFormulario = false;
    }
  }

  resetForm() {
    this.nuevoRegistro = {
      areteAnimal: '',
      tipo: 'Vacuna',
      nombreMedicamento: '',
      fechaAplicacion: new Date().toISOString().split('T')[0],
      motivo: '',
      veterinario: ''
    };
  }
}