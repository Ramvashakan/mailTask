import { Component } from '@angular/core';



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
  

  details = []


constructor(){}



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


  this.from = "";
  this.to = "";
  this.subject="";
  this.content="";

  console.log(this.details);

}

delete(mail){

  
  var index = this.details.indexOf(mail);
  
  this.details.splice(index,1);


}






}
