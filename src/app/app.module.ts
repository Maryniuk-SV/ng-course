import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { SystemModule } from './system/system.module';

import { AppComponent } from './app.component';
import { UsersService } from './shared/services/users.service';
import { AuthService } from './shared/services/auth.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AuthModule,
    AppRoutingModule,
    SystemModule
  ],
  providers: [
    UsersService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
