import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

interface ItemNavegacion {
  nombre: string;
  icono: string;
  accion: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgFor, CommonModule, NgIf, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  estaAbierto = false;
  
  // Usuario estático ya que no hay login
  usuario = {
    nombre: 'Administrador',
    rol: 'Control Ganadero SADER',
    correo: 'Rancho "El Lucero"',
    urlFoto: 'https://ui-avatars.com/api/?name=Admin+Rancho&background=10b981&color=fff'
  };

  elementosNavegacion: ItemNavegacion[] = [
  { 
    nombre: 'Dashboard', 
    icono: 'monitoring',      // Gráficas de rendimiento lechero
    accion: '/dashboard' 
  },
  { 
    nombre: 'Inventario', 
    icono: 'view_cozy',       // Representa el corral o grupo de ganado
    accion: '/inventario' 
  },
  { 
    nombre: 'Registrar Arete', 
    icono: 'app_registration', // Específico para registro oficial SADER/SINIIGA
    accion: '/nuevo-animal' 
  },
  { 
    nombre: 'Salud y Vacunas', 
    icono: 'vaccines',         // Icono médico claro para tratamiento
    accion: '/salud' 
  },
  { 
    nombre: 'Nacimientos', 
    icono: 'pets',             // Representa a las crías/becerros
    accion: '/nacimientos' 
  },
  { 
    nombre: 'Producción',      // Agregado: ideal para ganado lechero
    icono: 'water_drop',       // Representa la leche/líquidos
    accion: '/produccion' 
  },
  { 
    nombre: 'Configuración', 
    icono: 'tune',             // Ajustes de parámetros del rancho
    accion: '/configuracion' 
  }
];

  @Output() alternarSidebar = new EventEmitter<boolean>();

  constructor(public router: Router) {}

  alternarBarraLateral(): void {
    this.estaAbierto = !this.estaAbierto;
    this.alternarSidebar.emit(this.estaAbierto);
  }

  alHacerClicItem(accion: string) {
    this.router.navigate([accion]);
  }
}