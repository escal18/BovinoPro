import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import { Animal } from '../animal.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proximos-partos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proximos-partos.component.html',
  styleUrl: './proximos-partos.component.css'
})
export class ProximosPartosComponent implements OnInit {
  partos$!: Observable<Animal[]>;

  constructor(private animalService: AnimalService) {}

  ngOnInit() {
    this.partos$ = this.animalService.getProximosPartos();
  }

  getDiasRestantes(fecha: string): number {
    const diff = new Date(fecha).getTime() - new Date().getTime();
    return Math.ceil(diff / (1000 * 3600 * 24));
  }
}