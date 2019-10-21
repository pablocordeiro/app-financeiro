import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PesquisaContaComponent } from './pesquisa-conta/pesquisa-conta.component';
import { NovaContaComponent } from './nova-conta/nova-conta.component';


const routes: Routes = [
  {
    path: 'contas',
    component: PesquisaContaComponent
  },
  {
    path: 'contas/nova',
    component: NovaContaComponent
  },
  {
    path: 'contas/:codigo',
    component: NovaContaComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})

export class ContaRoutingModule {}
