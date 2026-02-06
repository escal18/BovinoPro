import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

interface ItemNavegacion {
  nombre: string;
  icono?: string;
  accion?: string; // Sigue siendo opcional
  subItems?: { nombre: string; accion: string }[];
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
  itemExpandido: string | null = null;

  elementosNavegacion: ItemNavegacion[] = [
    { nombre: 'Dashboard', icono: 'monitoring', accion: '/dashboard' },
    { nombre: 'Animales', icono: 'cow_svg', accion: '/inventario' },
    { nombre: 'Registrar Arete', icono: 'app_registration', accion: '/nuevo-animal' },
    { nombre: 'Salud y Vacunas', icono: 'vaccines', accion: '/calendario-vacunas' },
    { 
      nombre: 'Nacimientos', 
      icono: 'bedroom_baby', 
      accion: '/nacimientos', // Ruta principal
      subItems: [
        { nombre: 'Listado de Crías', accion: '/nacimientos' },
        { nombre: 'Registrar Parto', accion: '/registrar-nacimiento' },
        { nombre: 'Próximos Partos', accion: '/proximos-partos' }
      ]
    },
    { nombre: 'Producción', icono: 'water_drop', accion: '/produccion' },
    { nombre: 'Configuración', icono: 'tune', accion: '/configuracion' }
  ];

  @Output() alternarSidebar = new EventEmitter<boolean>();

  constructor(public router: Router) {}

  alternarBarraLateral(): void {
    this.estaAbierto = !this.estaAbierto;
    if (!this.estaAbierto) {
      this.itemExpandido = null;
    }
    this.alternarSidebar.emit(this.estaAbierto);
  }

  alHacerClicItem(item: ItemNavegacion) {
    if (item.subItems) {
      this.itemExpandido = this.itemExpandido === item.nombre ? null : item.nombre;
      
      if (!this.estaAbierto) {
        this.estaAbierto = true;
        this.alternarSidebar.emit(true);
      }
    }

    if (item.accion) {
      this.router.navigate([item.accion]);
      if (!item.subItems) {
        this.itemExpandido = null;
      }
    }
  }
}