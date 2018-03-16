import { ClientComponent } from './client/client.component';
import { ClientModule } from './client/client.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
