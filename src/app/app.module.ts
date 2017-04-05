import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { CategoriesComponent } from './categories/categories.component';
import { SingleComponent } from './single/single.component';
import { NavigationComponent } from './navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { PhpComponent } from './php/php.component';
import { SailsComponent } from './sails/sails.component';
import { FooterComponent } from './footer/footer.component';
import { VideoComponent } from './video/video.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OwlCarousel } from './shared/owl_carousel/owl_carousel.component'


const appRoutes: Routes = [
   { path: '', component: CategoriesComponent },
  { path: 'sails', component: SingleComponent },
  { path: 'php',      component: PhpComponent },
  {path:'video',      component:VideoComponent},
  { path: '**', component: CategoriesComponent }
];

 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    SingleComponent,
    NavigationComponent,
    SailsComponent,
    PhpComponent,
    FooterComponent,
    VideoComponent,
    OwlCarousel
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
