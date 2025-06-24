import { Routes } from '@angular/router';
import { ObrigadoComponent } from './components/obrigado/obrigado.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'obrigado',
    component: ObrigadoComponent
  },
  // outras rotas, se houver
];
