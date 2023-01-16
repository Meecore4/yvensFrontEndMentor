import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  name: string = 'e.g Stephen King';
  email: string = 'e.g stephenking@lorem.com';
  phone: string = 'e.g +1 234 567 890';

  
  constructor(){}

    ngOnInit(): void{
   }

}
