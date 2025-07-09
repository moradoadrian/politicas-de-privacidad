import { Routes } from '@angular/router';
import { PoliticasDePrivacidadComponent } from './components/public/politicas-de-privacidad/politicas-de-privacidad.component';
import { EliminarCuentaComponent } from './components/public/eliminar-cuenta/eliminar-cuenta.component';
export const routes: Routes = [
    {path: '', redirectTo: 'politicas-de-privacidad', pathMatch: 'full'},
    {path: 'politicas-de-privacidad', component: PoliticasDePrivacidadComponent},
    {path: 'eliminar-cuenta', component: EliminarCuentaComponent}
];
