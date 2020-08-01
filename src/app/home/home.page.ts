import { Component } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  mail:boolean = false;

  constructor() {}



  fab_add(){

    this.mail=true;
    

  }
  cancel(){
    this.mail=false;
  }

}
