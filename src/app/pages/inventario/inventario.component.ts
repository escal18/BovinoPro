import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import { Animal } from '../animal.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.css'
})
export class InventarioComponent implements OnInit {
  listaGanado: Animal[] = [];
  animalExpandido: number | null = null; // Almacena el ID del animal abierto

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.animalService.getGanado().subscribe(data => {
      this.listaGanado = data;
    });
  }

  toggleDetalle(id: number) {
    this.animalExpandido = this.animalExpandido === id ? null : id;
  }
}