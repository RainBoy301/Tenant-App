import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourListingsPageRoutingModule } from './your-listings-routing.module';

import { YourListingsPage } from './your-listings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourListingsPageRoutingModule
  ],
  declarations: [YourListingsPage]
})
export class YourListingsPageModule {}
