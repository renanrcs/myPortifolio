import { Component, OnInit } from '@angular/core';
import { projetos, IProjetos } from './projetos';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

projetos: IProjetos[] = projetos;

  constructor() { }

  ngOnInit(): void {
  }

}
