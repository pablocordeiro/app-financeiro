import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/core/model';

@Component({
  selector: 'app-nova-categoria',
  templateUrl: './nova-categoria.component.html',
  styleUrls: ['./nova-categoria.component.css']
})
export class NovaCategoriaComponent implements OnInit {

  categoria = new Categoria();

  constructor() { }

  ngOnInit() {
  }

}
