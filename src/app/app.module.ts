import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCe9obbpt6FHzEnIEM8WsT4AcAl_Bv2JZI'
    }),
  ],
  providers: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
