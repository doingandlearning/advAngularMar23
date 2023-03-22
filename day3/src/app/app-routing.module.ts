import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AreYouAllowedGuard } from './are-you-allowed.guard';
import { ReallyInterestingComponent } from './really-interesting/really-interesting.component';
import { HomeComponent } from './home/home.component';
import { NewComponentComponent } from './new-component/new-component.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'really/interesting/components',
    component: ReallyInterestingComponent,
    canActivate: [AreYouAllowedGuard],
  },
  { path: 'standalone', component: NewComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
