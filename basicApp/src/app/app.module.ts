import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactComponent } from './contact/contact.component';
import { ContactDisplayComponent } from './contact-display/contact-display.component';
import { PipesComponent } from './pipes/pipes.component';
import { ReversePipe } from './reverse.pipe';
import { LayoutComponent } from './layout/layout.component';
import { ConditionalComponent } from './conditional/conditional.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    ContactsComponent,
    ContactComponent,
    ContactDisplayComponent,
    PipesComponent,
    ReversePipe,
    LayoutComponent,
    ConditionalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
