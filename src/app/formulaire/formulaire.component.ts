import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  name: string = 'name';
  email: string = 'email';
  phone: string = 'phone';

  constructor(){}

    ngOnInit(): void{
   }
  }

