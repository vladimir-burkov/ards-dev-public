import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/ards-dev-public/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
