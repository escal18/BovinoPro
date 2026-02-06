import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import { Animal } from '../animal.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nacimientos-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nacimientos-listado.component.html',
  styleUrl: './nacimientos-listado.component.css' 
})
export class NacimientosListadoComponent implements OnInit {
  crias$!: Observable<Animal[]>;

  constructor(private animalService: AnimalService) {}

  ngOnInit() {
    this.crias$ = this.animalService.getCrias();
  }
}