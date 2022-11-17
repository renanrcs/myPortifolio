import { Component, OnInit } from '@angular/core';
import { formations, IFormation } from './formation';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  formation: IFormation[] = formations;

  constructor() { }

  ngOnInit(): void {
  }

}
