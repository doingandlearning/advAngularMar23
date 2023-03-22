import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { StoreModule } from '@ngrx/store';
import {
  cartReducer,
  metaReducerLocalStorage,
} from './cart-state-store/cart.reducer';
import { InputButtonComponent } from './input-button/input-button.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ProductsComponent,
    HeaderComponent,
    InputButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      { cartEntries: cartReducer },
      { metaReducers: [metaReducerLocalStorage] }
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      trace: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
