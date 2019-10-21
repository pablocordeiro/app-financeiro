import { Component, OnInit } from '@angular/core';
import { faTrash, faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { CategoriaService } from '../categoria.service';
import { CategoriaFiltro } from '../modelo-filtro';

@Component({
  selector: 'app-pesquisa-categoria',
  templateUrl: './pesquisa-categoria.component.html',
  styleUrls: ['./pesquisa-categoria.component.css']
})
export class PesquisaCategoriaComponent implements OnInit {

  filtro = new CategoriaFiltro();
  categorias = [];
  totalElementos: number;
  faPen   = faPen;
  faTrash = faTrash;
  faPlus  = faPlus;

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.pesquisar();
    }

  loadPage() {
    this.filtro.paginaAtual = this.filtro.paginaAtual - 1;
    this.pesquisar();
    this.filtro.paginaAtual = this.filtro.paginaAtual + 1;

  }

  pesquisar() {
    this.categoriaService.filtrar(this.filtro)
    .then( resultado => {
      this.categorias = resultado.categorias;
      this.totalElementos = resultado.totalElementos;
      });
  }

}
