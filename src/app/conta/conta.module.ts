import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { PesquisaContaComponent } from './pesquisa-conta/pesquisa-conta.component';
import { NovaContaComponent } from './nova-conta/nova-conta.component';
import { ContaRoutingModule } from './app.conta-routing.module';

@NgModule({
  declarations: [
    PesquisaContaComponent,
    NovaContaComponent
  ],
  imports: [
    CommonModule,

    FontAwesomeModule,
    NgbTooltipModule,
    ContaRoutingModule
  ],
  exports: [
  ]
})
export class ContaModule { }
