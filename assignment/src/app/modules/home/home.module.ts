import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { HomeComponent } from './home.component';
import { IntroComponent } from './intro/intro.component';
import { PrimeComponent } from './prime/prime.component';
import { PromotionComponent } from './promotion/promotion.component';
import { SpecialistComponent } from './specialist/specialist.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { AgGridModule } from 'ag-grid-angular';
import { CoreModule } from '../../core/core.module';


@NgModule({
  declarations: [
      PageNotFoundComponent,
      HomeComponent,
      IntroComponent,
      PrimeComponent,
      PromotionComponent,
      SpecialistComponent,
      SocialMediaComponent,
    ],
  imports: [
    AgGridModule.withComponents(null),
    CoreModule,
  ],
  providers: [],
  exports: [
      PageNotFoundComponent,
      HomeComponent,
  ]
})
export class HomeModule { }