import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  projetos = [
    {imagem: '../assets/icons/skills/icon-html.svg', titulo: 'Decodificador de texto',
    subtitulo: 'Challenge da alura e Oracle para decodificar textos'},
    {imagem: '../assets/icons/skills/icon-node.svg',
  titulo: 'Jogo da Forca',
  subtitulo: 'mais um challenge, esse criado com HTML, CSS e JS'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
