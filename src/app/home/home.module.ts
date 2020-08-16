import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import {MailComponent} from '../mail/mail.component';
import { ComponentsModule } from '../mail/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ComponentsModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
