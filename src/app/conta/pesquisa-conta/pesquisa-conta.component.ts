import { Component, OnInit } from '@angular/core';
import { faTrash, faPen, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pesquisa-conta',
  templateUrl: './pesquisa-conta.component.html',
  styleUrls: ['./pesquisa-conta.component.css']
})
export class PesquisaContaComponent implements OnInit {
  contas = [
    {codigo: 1, nome: 'Conta Corrente', banco: true},
    {codigo: 2, nome: 'Poupança', banco: false},
    {codigo: 3, nome: 'Investimentos', banco: false}
  ];

  faPen   = faPen;
  faTrash = faTrash;
  faPlus  = faPlus;

  constructor() { }

  ngOnInit() {
  }

}
