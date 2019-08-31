import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ShoppingReducer } from './store/reduces/shopping.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ShoppingEffects } from './store/effects/shoppig.effects';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { CardItemComponent } from './card-item/card-item.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ItemListComponent } from './item-list/item-list.component';
import { FormAddItemComponent } from './form-add-item/form-add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CardItemComponent,
    ItemListComponent,
    FormAddItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    StoreModule.forRoot({
      shopping: ShoppingReducer,
    }), 
    EffectsModule.forRoot([ShoppingEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
