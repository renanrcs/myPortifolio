import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills = [
    {imagem: "../../../assets/icons/skills/icon-html.svg",
     alt: "Icone HTML",
     titulo: "HTML 5"
    },
    {imagem: "../../../assets/icons/skills/icon-css.svg",
     alt: "Icone CSS",
     titulo: "CSS"
    },
    {imagem: "../../../assets/icons/skills/icon-angular.svg",
     alt: "Icone Angular",
     titulo: "Angular"
    },
    {imagem: "../../../assets/icons/skills/icon-spring.svg",
     alt: "Icone Spring",
     titulo: "Spring"
    },
    {imagem: "../../../assets/icons/skills/icon-javascript.svg",
     alt: "Icone JavaScript",
     titulo: "JAVASCRIPT"
    },
    {imagem: "../../../assets/icons/skills/icon-java-original.svg",
     alt: "Icone Java",
     titulo: "Java"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
