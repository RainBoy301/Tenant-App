import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModeratorDefaultPageRoutingModule } from './moderator-default-routing.module';

import { ModeratorDefaultPage } from './moderator-default.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModeratorDefaultPageRoutingModule
  ],
  declarations: [ModeratorDefaultPage]
})
export class ModeratorDefaultPageModule {}
