import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModeratorEditPage } from './moderator-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ModeratorEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModeratorEditPageRoutingModule {}
