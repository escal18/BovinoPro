import { Component, Input } from '@angular/core'; // Importante: incluir Input
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Necesario para pipes y directivas

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  // Solución al error NG8002 y NG9 de sidebarAbierto
  @Input() sidebarAbierto: boolean = false; 

  // Solución al error NG9 de fechaActual
  numArete: string = '';
  fechaActual: string;

  constructor(private router: Router) {
    const opciones: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    this.fechaActual = new Date().toLocaleDateString('es-MX', opciones);
  }

  buscarAnimal() {
    if (this.numArete.trim()) {
      this.router.navigate(['/animal', this.numArete]);
      this.numArete = '';
    }
  }
}