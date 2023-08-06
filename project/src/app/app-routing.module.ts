import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'message/:id',
    loadChildren: () => import('./view-message/view-message.module').then( m => m.ViewMessagePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'se-connecter',
    loadChildren: () => import('./se-connecter/se-connecter.module').then( m => m.SeConnecterPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'new/:id',
    loadChildren: () => import('./new-detail/new-detail.module').then( m => m.NewDetailPageModule)
  },
  {
    path: 'paper-request',
    loadChildren: () => import('./paper-request/paper-request.module').then( m => m.PaperRequestPageModule)
  },
  {
    path: 'feed-back',
    loadChildren: () => import('./feed-back/feed-back.module').then( m => m.FeedBackPageModule)
  },
  {
    path: 'paper-request-history',
    loadChildren: () => import('./paper-request-history/paper-request-history.module').then( m => m.PaperRequestHistoryPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
