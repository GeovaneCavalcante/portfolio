import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSectionClientComponent } from './home-section-client/home-section-client.component';
import { ClientComponent } from './client.component';
import { PostagenClientComponent } from './postagen-client/postagen-client.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeClientComponent } from './home-client/home-client.component';

const appRoutes: Routes = [
  { path: '', component: HomeClientComponent },
  { path: 'postagens', component: PostagenClientComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    HomeSectionClientComponent,
    ClientComponent,
    PostagenClientComponent,
    HomeClientComponent
  ],
  exports: [
    HomeSectionClientComponent,
    ClientComponent
  ]
})
export class ClientModule { }
