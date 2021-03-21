import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login-routing.module').then( m => m.LoginPageRoutingModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin-routing.module').then( m => m.AdminPageRoutingModule),
    canActivate: [AuthGuard],

  },
  {
    path: 'verify-email',
    loadChildren: () => import('./verify-email/verify-email-routing.module').then( m => m.VerifyEmailPageRoutingModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password-routing.module').then( m => m.ForgotPasswordPageRoutingModule)
  },
  {
    path: 'gestiontorres',
    loadChildren: () => import('./gestiontorres/gestiontorres.module').then( m => m.GestiontorresPageModule)
  },
  {
    path: 'tdetails/:id',
    loadChildren: () => import('./torre-details/torre-details.module').then( m => m.TorreDetailsPageModule)
  },
  {path:'details', loadChildren:'./torre-details/torre-details.module'},
  {
    path: 'gestionpisos',
    loadChildren: () => import('./gestionpisos/gestionpisos.module').then( m => m.GestionpisosPageModule)
  },
  {
    path: 'gestionapartamento',
    loadChildren: () => import('./gestionapartamento/gestionapartamento.module').then( m => m.GestionapartamentoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
})
export class AppRoutingModule { }
