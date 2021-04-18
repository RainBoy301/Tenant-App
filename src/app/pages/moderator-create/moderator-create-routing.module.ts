import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModeratorCreatePage } from './moderator-create.page';

const routes: Routes = [
  {
    path: '',
    component: ModeratorCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModeratorCreatePageRoutingModule {}
