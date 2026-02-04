import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importante para el ngModel
import { AnimalService } from '../animal.service';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-animal-detalle',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './animal-detalle.component.html',
  styleUrl: './animal-detalle.component.css'
})
export class AnimalDetalleComponent implements OnInit {
  animal: Animal | undefined;
  editandoProduccion: boolean = false;
  nuevaProduccion: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private animalService: AnimalService
  ) {}

  ngOnInit(): void {
    const arete = this.route.snapshot.paramMap.get('arete');
    this.animalService.getGanado().subscribe(lista => {
      this.animal = lista.find(a => a.arete === arete);
      if (this.animal) {
        this.nuevaProduccion = this.animal.produccionDiaria;
      }
    });
  }

  toggleEdicion() {
    this.editandoProduccion = !this.editandoProduccion;
  }

  guardarProduccion() {
    if (this.animal && this.nuevaProduccion >= 0) {
      this.animal.produccionDiaria = this.nuevaProduccion;
      // Aquí el servicio actualiza el registro global
      this.animalService.actualizarAnimal(this.animal); 
      this.editandoProduccion = false;
    }
  }

  regresar() {
    this.router.navigate(['/inventario']);
  }
}