import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'Main', component: MainComponent },
  { path: 'Testominal', component: TestimonialComponent },
  { path: 'body', component: BodyComponent },
  { path: 'footer', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
