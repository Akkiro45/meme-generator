import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';

// guards 
import {
  AuthGuardService as AuthGuard 
} from './auth/auth-guard.service';

// services 
import { MemeService } from './meme.service';

// components
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { GeneratorComponent } from './generator/generator.component';
import { MemeCreateComponent } from './generator/meme-create/meme-create.component';
import { MemeListComponent } from './meme-list/meme-list.component';
import { HeaderComponent } from './header/header.component';
import { MemeCardComponent } from './memes/meme-card/meme-card.component';
import { ControlsComponent } from './generator/meme-create/controls/controls.component';
import { MemeWindowComponent } from './generator/meme-create/meme-window/meme-window.component';
import { MemesComponent } from './memes/memes.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    BookmarkComponent,
    GeneratorComponent,
    MemeCreateComponent,
    MemeListComponent,
    HeaderComponent,
    MemeCardComponent,
    ControlsComponent,
    MemeWindowComponent,
    MemesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [
    AuthGuard,
    MemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
