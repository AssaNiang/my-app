import { Component } from '@angular/core';
import { Classe, STUDIENT } from 'src/app/mockEleve/studient.mockEleve';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent {
  // studient une nlle variable
 
  studient: Classe[]= STUDIENT;
}
