import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscandoMatchPage } from './buscando-match.page';

const routes: Routes = [
  {
    path: '',
    component: BuscandoMatchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscandoMatchPageRoutingModule {}
