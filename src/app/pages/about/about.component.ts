import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  myImage: string = './assets/images/foto_3x4.png';

  constructor() { }

  ngOnInit(): void {
  }

}
