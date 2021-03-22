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
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login-routing.module').then(m => m.LoginPageRoutingModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin-routing.module').then(m => m.AdminPageRoutingModule),
    canActivate: [AuthGuard],

  },
  {
    path: 'verify-email',
    loadChildren: () => import('./verify-email/verify-email-routing.module').then(m => m.VerifyEmailPageRoutingModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password-routing.module').then(m => m.ForgotPasswordPageRoutingModule)
  },
  {
    path: 'gestiontorres',
    loadChildren: () => import('./gestiontorres/gestiontorres.module').then(m => m.GestiontorresPageModule)
  },
  {
    path: 'tdetails/:id',
    loadChildren: () => import('./torre-details/torre-details.module').then(m => m.TorreDetailsPageModule)
  },
  { path: 'tdetails', loadChildren: './torre-details/torre-details.module' },
  {
    path: 'gestionpisos',
    loadChildren: () => import('./gestionpisos/gestionpisos.module').then(m => m.GestionpisosPageModule)
  },
  {
    path: 'gestionapartamento',
    loadChildren: () => import('./gestionapartamento/gestionapartamento.module').then(m => m.GestionapartamentoPageModule)
  },
  {
    path: 'pdetails/:id',
    loadChildren: () => import('./piso-details/piso-details.module').then(m => m.PisoDetailsPageModule)
  },
  {
    path: 'showpiso',
    loadChildren: () => import('./piso-details/piso-details.module')
  },
  {
    path: 'apto-details',
    loadChildren: () => import('./apto-details/apto-details.module').then(m => m.AptoDetailsPageModule)
  },
  {
    path: 'pisos-torre1',
    loadChildren: () => import('./pisos-torre1/pisos-torre1.module').then(m => m.PisosTorre1PageModule)
  },
  {
    path: 'pisos-torre2',
    loadChildren: () => import('./pisos-torre2/pisos-torre2.module').then(m => m.PisosTorre2PageModule)
  },
  {
    path: 'pisos-torre3',
    loadChildren: () => import('./pisos-torre3/pisos-torre3.module').then(m => m.PisosTorre3PageModule)
  },
  {
    path: 'pisos-torre4',
    loadChildren: () => import('./pisos-torre4/pisos-torre4.module').then(m => m.PisosTorre4PageModule)
  },
  {
    path: 'aptodetails/:id',
    loadChildren: () => import('./aptodetails/aptodetails.module').then(m => m.AptodetailsPageModule)
  },
  {
    path: 'apdetails',
    loadChildren: () => import ('./aptodetails/aptodetails.module')
  },
  {
    path: 'reuniones',
    loadChildren: () => import('./reuniones/reuniones.module').then( m => m.ReunionesPageModule)
  },
  {
    path: 'gestion-reunion',
    loadChildren: () => import('./gestion-reunion/gestion-reunion.module').then( m => m.GestionReunionPageModule)
  },
  {
    path: 'rdetails/:id',
    loadChildren: () => import('./reunion-details/reunion-details.module').then( m => m.ReunionDetailsPageModule)
  },
  {
    path: 'rdetails',
    loadChildren: () => import('./reunion-details/reunion-details.module').then( m => m.ReunionDetailsPageModule)
  },
  {
    path: 'reservas',
    loadChildren: () => import('./reservas/reservas.module').then( m => m.ReservasPageModule)
  },
  {
    path: 'reservas-details',
    loadChildren: () => import('./reservas-details/reservas-details.module').then( m => m.ReservasDetailsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
})
export class AppRoutingModule { }
