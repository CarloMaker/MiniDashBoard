import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit {

  longText : string ="LoREM IPSUM";
  constructor() { }

  ngOnInit(): void {
  }

}
