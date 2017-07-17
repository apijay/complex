import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ItemListComponent } from '../item-list/item-list.component';
import { BillDetailComponent } from '../bill-detail/bill-detail.component';

@NgModule({
  imports:[
    BrowserModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ItemListComponent,
    BillDetailComponent
  ],
  exports:[
    BrowserModule,
    HeaderComponent,
    FooterComponent,
    ItemListComponent,
    BillDetailComponent
  ]
})

export class SharedModule {}
