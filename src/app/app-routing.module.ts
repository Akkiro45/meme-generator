import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { GeneratorComponent } from './generator/generator.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { MemeListComponent } from './meme-list/meme-list.component';
// guards
import {
  AuthGuardService as AuthGuard 
} from './auth/auth-guard.service';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'create', component: GeneratorComponent, canActivate: [AuthGuard] },
  { path: 'bookmark', component: BookmarkComponent, canActivate: [AuthGuard] },
  { path: 'my', component: MemeListComponent, canActivate: [AuthGuard] },
  { path: '**', component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
