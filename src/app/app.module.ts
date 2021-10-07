import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EvenComponent } from './game-control/even/even.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './game-control/odd/odd.component';
import { ActiveUsersComponent } from './user/active-users/active-users.component';
import { InactiveUsersComponent } from './user/inactive-users/inactive-users.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
