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
    {imagem: "../../../assets/icons/skills/icon-react.svg",
     alt: "Icone React",
     titulo: "REACT"
    },
    {imagem: "../../../assets/icons/skills/icon-node.svg",
     alt: "Icone Node",
     titulo: "NODE"
    },
    {imagem: "../../../assets/icons/skills/icon-js.svg",
     alt: "Icone JavaScript",
     titulo: "JAVASCRIPT"
    },
    {imagem: "../../../assets/icons/skills/icon-php.svg",
     alt: "Icone PHP",
     titulo: "PHP"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
