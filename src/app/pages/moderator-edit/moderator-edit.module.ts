import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModeratorEditPageRoutingModule } from './moderator-edit-routing.module';

import { ModeratorEditPage } from './moderator-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModeratorEditPageRoutingModule
  ],
  declarations: [ModeratorEditPage]
})
export class ModeratorEditPageModule {}
