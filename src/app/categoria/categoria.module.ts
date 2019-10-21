import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbTooltipModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { NovaCategoriaComponent } from './nova-categoria/nova-categoria.component';
import { PesquisaCategoriaComponent } from './pesquisa-categoria/pesquisa-categoria.component';
import { CategoriaRoutingModule } from './app.categoria-routing.module';

@NgModule({
  declarations: [
    NovaCategoriaComponent,
    PesquisaCategoriaComponent
  ],
  imports: [
    CommonModule,
    NgbPaginationModule,
    FormsModule,

    FontAwesomeModule,
    NgbTooltipModule,
    CategoriaRoutingModule
  ],
  exports: [
  ]
})
export class CategoriaModule { }
