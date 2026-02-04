import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AnimalService } from '../animal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './animal-formulario.component.html',
  styleUrl: './animal-formulario.component.css'
})
export class AnimalFormularioComponent {
  animalForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private animalService: AnimalService,
    private router: Router
  ) {
    this.animalForm = this.fb.group({
      arete: ['', [Validators.required, Validators.pattern('^[0-9 ]+$')]],
      nombre: ['', Validators.required],
      raza: ['Holstein', Validators.required],
      fechaNacimiento: ['', Validators.required],
      padre: ['', Validators.required], // Semental IA
      madre: [''],                      // Madre (opcional)
      estado: ['Saludable', Validators.required],
      lote: ['Ordeña', Validators.required],
      produccionDiaria: [0]
    });
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