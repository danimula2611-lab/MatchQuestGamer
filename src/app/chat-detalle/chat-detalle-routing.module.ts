import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatDetallePage } from './chat-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: ChatDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatDetallePageRoutingModule {}
