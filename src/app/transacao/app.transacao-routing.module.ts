import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PesquisaTransacaoComponent } from './pesquisa-transacao/pesquisa-transacao.component';
import { NovaTransacaoComponent } from './nova-transacao/nova-transacao.component';

const routes: Routes = [
  {
    path: 'transacoes',
    component: PesquisaTransacaoComponent
  },
  {
    path: 'transacoes/nova',
    component: NovaTransacaoComponent
  },
  {
    path: 'transacoes/:codigo',
    component: NovaTransacaoComponent
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

export class TransacaoRoutingModule {}
