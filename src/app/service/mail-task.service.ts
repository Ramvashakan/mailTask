import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class MailTaskService {

  try = [];

  constructor(private storage:Storage,private platform:Platform) { 

  }


  setStore(){


    this.storage.set('mail',JSON.stringify(this.try));
    
   
  }

  getStore():Promise<Array<string>> {


    return new Promise((resolve,reject)=>{

      this.storage.get('mail').then((val)=>{

        resolve(JSON.parse(val))
        
      }).catch((err)=>{

        reject('not')
      })
    
    })
  }

  getData(details){

    this.try = details;

    this.setStore();
  }
  

  delete(mail){

    var a = this.try.indexOf(mail);
    this.try.splice(a,1);

    this.setStore();

   
  }

}
