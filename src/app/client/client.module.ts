import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSectionClientComponent } from './home-section-client/home-section-client.component';
import { ClientComponent } from './client.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    HomeSectionClientComponent,
    ClientComponent
  ],
  exports: [
    HomeSectionClientComponent,
    ClientComponent
  ]
})
export class ClientModule { }
