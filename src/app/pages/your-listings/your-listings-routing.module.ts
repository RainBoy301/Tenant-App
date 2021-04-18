import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourListingsPage } from './your-listings.page';

const routes: Routes = [
  {
    path: '',
    component: YourListingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourListingsPageRoutingModule {}
