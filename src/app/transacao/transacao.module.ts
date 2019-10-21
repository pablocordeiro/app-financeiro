import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisaTransacaoComponent } from './pesquisa-transacao/pesquisa-transacao.component';
import { NovaTransacaoComponent } from './nova-transacao/nova-transacao.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbDatepickerModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { TransacaoRoutingModule } from './app.transacao-routing.module';


@NgModule({
  declarations: [
    PesquisaTransacaoComponent,
    NovaTransacaoComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbDatepickerModule,
    NgbTooltipModule,
    TransacaoRoutingModule
  ],
  exports: [
  ]
})
export class TransacaoModule { }
