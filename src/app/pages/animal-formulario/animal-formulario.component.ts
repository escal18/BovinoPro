import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AnimalService } from '../animal.service';
import { Router } from '@angular/router';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-animal-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './animal-formulario.component.html',
  styleUrl: './animal-formulario.component.css'
})
export class AnimalFormularioComponent implements OnInit {
  animalForm: FormGroup;
  madresDisponibles: Animal[] = []; // Para el autocompletado de linaje

  constructor(
    private fb: FormBuilder,
    private animalService: AnimalService,
    private router: Router
  ) {
    this.animalForm = this.fb.group({
      arete: ['', [Validators.required, Validators.pattern('^[0-9 ]+$')]],
      nombre: ['', Validators.required],
      raza: ['Holstein', Validators.required],
      fechaNacimiento: [new Date().toISOString().substring(0, 10), Validators.required],
      padre: ['', Validators.required],
      madre: ['', Validators.required],
      sexo: ['Hembra', Validators.required], // Nuevo campo
      estado: ['Saludable', Validators.required],
      lote: ['Novillas', Validators.required], // Por defecto a Novillas para recién nacidos
      produccionDiaria: [0],
      // Campos de especialidad para nacimientos
      pesoAlNacer: [null, [Validators.min(10), Validators.max(60)]],
      facilidadParto: ['Normal'],
      vigor: [5],
      colostroRecibido: [false],
      desinfeccionOmbligo: [false]
    });
  }

  ngOnInit() {
    // Aquí cargarías las vacas adultas del servicio para el buscador de madres
    this.madresDisponibles = this.animalService.getGanadoSync().filter(a => a.lote !== 'Hembra');
  }

  regresar() {
    this.router.navigate(['/inventario']);
  }

  onSubmit() {
    if (this.animalForm.valid) {
      const nuevoAnimal = {
        id: Date.now(),
        ...this.animalForm.value
      };
      this.animalService.agregarAnimal(nuevoAnimal);
      this.regresar();
    }
  }
}