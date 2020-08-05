import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss'],
})
export class MailComponent implements OnInit {

  @Input() mail:any;
  @Input() i:any;

  details = []

  constructor() { }

  ngOnInit() {
    
  }


  delete(i){

    this.mail.splice(i,1);


    console.log(this.mail)

  }

}
