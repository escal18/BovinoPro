import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { AnimalFormularioComponent } from './pages/animal-formulario/animal-formulario.component';
import { AnimalDetalleComponent } from './pages/animal-detalle/animal-detalle.component';
import { CalendarioVacunasComponent } from './pages/calendario-vacunas/calendario-vacunas.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'inventario', component: InventarioComponent },
    { path: 'nuevo-animal', component: AnimalFormularioComponent },
    // Usamos :id para que la ruta sea dinámica según el número de arete
    { path: 'animal/:arete', component: AnimalDetalleComponent }, 
    { path: 'calendario-vacunas', component: CalendarioVacunasComponent },
    { path: '**', redirectTo: 'dashboard' } // Redirección por si el usuario se pierde
];
