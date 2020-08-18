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

  getStore():Promise<Array<number>> {


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
  

  delete(index){

    this.try.splice(index,1);
    this.setStore();

  }

}
