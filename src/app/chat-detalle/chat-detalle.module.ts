import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatDetallePageRoutingModule } from './chat-detalle-routing.module';

import { ChatDetallePage } from './chat-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatDetallePageRoutingModule
  ],
  declarations: [ChatDetallePage]
})
export class ChatDetallePageModule {}
