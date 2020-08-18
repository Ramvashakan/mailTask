import { Component } from '@angular/core';

import { Storage } from '@ionic/storage'
import { MailTaskService } from '../service/mail-task.service';
import { Platform } from '@ionic/angular';

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

  details = [];

 

constructor( private storage:Storage,private mailService:MailTaskService,private plateform:Platform ){ 


  this.mailService.getStore().then((val)=>{

    this.details = val
  }).catch((err)=>{
    console.log(err);
  })
}


fab_add(){


  this.mail=true;  

}

cancel(){
  this.mail=false;
}

send(){


  this.details.push({
    from: this.from,
    subject:this.subject
  })

  this.mailService.getData(this.details)
  this.mailService.getStore();
 
  
}

delete(mail){
  
  var index = this.details.indexOf(mail);
  
 // this.details.splice(index,1);

  this.mailService.delete(mail);


    

  

}
}
