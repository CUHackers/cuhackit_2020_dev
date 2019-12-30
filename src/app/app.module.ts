import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { PartnersComponent } from './partners/partners.component';
import { ContactComponent } from './contact/contact.component';
import { QuotesComponent } from './quotes/quotes.component';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Schedule2Component } from './schedule2/schedule2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScheduleComponent,
    PartnersComponent,
    ContactComponent,
    QuotesComponent,
    AboutComponent,
    NavigationComponent,
    Schedule2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
