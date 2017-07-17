import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { applyMiddleware, Store, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ItemListComponent } from './item-list/item-list.component';
import { BillDetailComponent } from './bill-detail/bill-detail.component';

import { IAppState, INITIAL_STATE } from './app.store';
import { rootReducer } from './reducers';

import { KeysPipe } from './shared/key.pipe';

export const store: Store <IAppState> = createStore(rootReducer, INITIAL_STATE,
  applyMiddleware(thunk, createLogger()));

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ItemListComponent,
    BillDetailComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux:NgRedux<IAppState>) {
    ngRedux.provideStore(store);
  }
}
