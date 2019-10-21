import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PesquisaCategoriaComponent } from './pesquisa-categoria/pesquisa-categoria.component';
import { NovaCategoriaComponent } from './nova-categoria/nova-categoria.component';

const routes: Routes = [
  {
    path: 'categorias',
    component: PesquisaCategoriaComponent
  },
  {
    path: 'categorias/nova',
    component: NovaCategoriaComponent
  },
  {
    path: 'categorias/:codigo',
    component: NovaCategoriaComponent
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

export class CategoriaRoutingModule {}
