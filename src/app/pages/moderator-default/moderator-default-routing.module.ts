import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModeratorDefaultPage } from './moderator-default.page';

const routes: Routes = [
  {
    path: '',
    component: ModeratorDefaultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModeratorDefaultPageRoutingModule {}
