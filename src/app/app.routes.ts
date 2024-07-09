import { Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactComponent } from './contact/contact.component';
// import { ContactComponent } from './contact/contact.component';
// import { LandingPageComponent } from './pages/landing-page/landing-page.component';
// import { ServicesComponent } from './pages/services/services.component';
// import { PortfolioComponent } from './pages/portfolio/portfolio.component';
// import { BlogComponent } from './pages/blog/blog.component';
// import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
//   { path: 'portfolio', component: PortfolioComponent },
//   { path: 'blog', component: BlogComponent },
];