import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { NgRedux, select } from '@angular-redux/store';

import { IAppState } from '../app.store';


@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.component.html',
  styleUrls: ['./bill-detail.component.css'],
})
export class BillDetailComponent implements OnInit {

  @select() cartItems$: Observable<IAppState>;
  @select() totalCost$: Observable<IAppState>;
  @select() discount$: Observable<IAppState>;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

}
