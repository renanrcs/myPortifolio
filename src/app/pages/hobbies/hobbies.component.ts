import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  hobbies = [
    {imagem: "../../../assets/icons/hobbies/icon_skateboarding.svg", titulo: "Andar de Skate",
  alt: "Icone Humano sobre skate"},
    {imagem: "../../../assets/icons/hobbies/icon_guitar.svg", titulo: "Tocar baixo", alt: "Icone Instrumento musical Baixo"},
    {imagem: "../../../assets/icons/hobbies/icon_headphones.svg", titulo: "Ouvir Música", alt: "Icone Fone Readset"},
    {
      imagem: "../../../assets/icons/hobbies/icon_tv_black.svg", titulo: "Assistir Séries", alt: "Icone Televisao"
    },
    {
      imagem: "../../../assets/icons/hobbies/icon_restaurant_menu.svg", titulo: "Cozinhar", alt: "Icone Talheres"
    },
    {
      imagem: "../../../assets/icons/hobbies/icon_photo_camera.svg", titulo: "Tirar fotos", alt: "Icone Camera Fotografica"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
