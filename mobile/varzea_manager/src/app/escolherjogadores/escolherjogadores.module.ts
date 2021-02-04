import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscolherjogadoresPageRoutingModule } from './escolherjogadores-routing.module';

import { EscolherjogadoresPage } from './escolherjogadores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscolherjogadoresPageRoutingModule
  ],
  declarations: [EscolherjogadoresPage]
})
export class EscolherjogadoresPageModule {}
