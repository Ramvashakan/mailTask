import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss'],
})
export class MailComponent implements OnInit {

  mail:boolean = false;
  from:any;
  to:any;
  subject:any;
  content:any;
  

  details = []

  constructor() { }

  ngOnInit() {}


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
    })

    console.log(this.details);

  }

  delete(i){

    this.details.splice(i,1);

    console.log(this.details)

  }

}
