import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'create',
    loadChildren: () => import('./pages/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'your-listings',
    loadChildren: () => import('./pages/your-listings/your-listings.module').then( m => m.YourListingsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'moderator-edit',
    loadChildren: () => import('./pages/moderator-edit/moderator-edit.module').then( m => m.ModeratorEditPageModule)
  },
  {
    path: 'moderator-create',
    loadChildren: () => import('./pages/moderator-create/moderator-create.module').then( m => m.ModeratorCreatePageModule)
  },
  {
    path: 'moderator-default',
    loadChildren: () => import('./pages/moderator-default/moderator-default.module').then( m => m.ModeratorDefaultPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () =>  import('./pages/edit/edit.module').then( m => m.EditPageModule)
  },  {
    path: 'update-password',
    loadChildren: () => import('./pages/update-password/update-password.module').then( m => m.UpdatePasswordPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
