import { Component } from '@angular/core';

import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  mail:boolean = false;
  from:any;
  to:any;
  subject:any;
  content:any;

  list:any = [];


  details= [];

 

constructor( private storage:Storage ){ 

  this.storage.get('list').then((val) => {
   
    this.details = JSON.parse(val)
  });

}


fab_add(){


  this.mail=true;  

}

cancel(){
  this.mail=false;
}

send(){

  this.details.push({
    from:this.from,
    to:this.to,
    subject:this.subject,
    content:this.content
  });


  this.list = JSON.stringify(this.details)

  this.storage.set( 'list' , this.list)

  this.from = "";
  this.to = "";
  this.subject="";
  this.content="";

  this.storage.get('list').then((val) => {
    
    this.details = JSON.parse(val);

  });

}

delete(mail){
  
  var index = this.details.indexOf(mail);
  
  this.details.splice(index,1);

}
}
