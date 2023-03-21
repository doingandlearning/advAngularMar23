import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppModule } from './app/app.module';

import { ProductListComponent } from './app/products/product-list/product-list.component';

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch((err) => console.error(err));

bootstrapApplication(ProductListComponent);
