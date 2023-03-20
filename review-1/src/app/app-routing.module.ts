import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HarnessComponent } from './harness/harness.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'harness', component: HarnessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
