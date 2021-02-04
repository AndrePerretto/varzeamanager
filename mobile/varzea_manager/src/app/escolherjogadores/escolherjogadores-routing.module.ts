import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscolherjogadoresPage } from './escolherjogadores.page';

const routes: Routes = [
  {
    path: '',
    component: EscolherjogadoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscolherjogadoresPageRoutingModule {}
