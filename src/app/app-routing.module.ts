import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then(m => m.RegisterPage)
  },
  {
    path: 'chat-detalle/:nombre',
    loadChildren: () => import('./chat-detalle/chat-detalle.module').then(m => m.ChatDetallePageModule)
  },
  {
    // MODIFICADO: Cambiado a loadComponent para soportar la página Standalone sin el módulo antiguo
    path: 'buscando-match/:juego',
    loadComponent: () => import('./buscando-match/buscando-match.page').then(m => m.BuscandoMatchPage)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}