import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModeratorCreatePageRoutingModule } from './moderator-create-routing.module';

import { ModeratorCreatePage } from './moderator-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModeratorCreatePageRoutingModule
  ],
  declarations: [ModeratorCreatePage]
})
export class ModeratorCreatePageModule {}
