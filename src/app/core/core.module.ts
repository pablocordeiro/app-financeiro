import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule, NgbDatepickerI18n, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { CategoriaModule } from '../categoria/categoria.module';
import { ContaModule } from '../conta/conta.module';
import { TransacaoModule } from '../transacao/transacao.module';
import { CategoriaService } from '../categoria/categoria.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { I18n, CustomDatepickerI18n } from '../CustomDatepickerI18n';
import { NgbDatePTParserFormatter } from '../NgbDatePTParserFormatter';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,

    FontAwesomeModule,
    NgbModule,

    CategoriaModule,
    ContaModule,
    TransacaoModule
  ],
  providers: [
    CategoriaService,
    HttpClient,
    [I18n, { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }],
    [{provide: NgbDateParserFormatter, useClass: NgbDatePTParserFormatter}]
  ]
})
export class CoreModule { }
