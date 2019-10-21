import { Component, OnInit } from '@angular/core';
import { faCalendar, faPen, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pesquisa-transacao',
  templateUrl: './pesquisa-transacao.component.html',
  styleUrls: ['./pesquisa-transacao.component.css']
})
export class PesquisaTransacaoComponent implements OnInit {

  transacoes = [
    {codigo: 1, nome: 'Conta Corrente'},
    {codigo: 2, nome: 'Poupança'},
    {codigo: 3, nome: 'Investimentos'}
  ];


  faPen   = faPen;
  faTrash = faTrash;
  faPlus  = faPlus;


  faCalendar = faCalendar;

  constructor() { }

  ngOnInit() {
  }

}
