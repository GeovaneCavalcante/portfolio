import { Routes } from '@angular/router';


import { HomeClientComponent } from './home-client/home-client.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { ContactComponent } from './contact/contact.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PostagenClientComponent } from './postagen-client/postagen-client.component';

export const appRoutes: Routes = [
    { path: '', component: HomeClientComponent },
    { path: 'postagens', component: PostagenClientComponent },
    { path: 'contatos', component: PageContactComponent }
    { path: 'portfolio', component: PortfolioComponent }
]
