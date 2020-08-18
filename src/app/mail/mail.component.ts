import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss'],
})
export class MailComponent implements OnInit {

  @Input() mail:any;
  @Output() data = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }


  delete(){

    this.data.emit(this.mail);
  

  }

}
