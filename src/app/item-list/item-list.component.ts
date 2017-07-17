import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { NgRedux, select, dispatch } from '@angular-redux/store';
import { IAppState } from '../app.store';
import * as Actions from '../app.action';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @select() readonly items$:Observable<IAppState>;

  constructor(private ngRedux:NgRedux<IAppState>) { }

  ngOnInit() {
  }
  addItem(item) {
    this.ngRedux.dispatch( (dispatch) => {
      dispatch({ type: Actions.ITEM_ADDED, payload:item })
    })
  }
  removeItem(item) {
    this.ngRedux.dispatch( (dispatch) => {
      dispatch({ type: Actions.ITEM_REMOVED, payload:item })
    })
  }
  checkOut() {
    this.ngRedux.dispatch( (dispatch) => {
      dispatch({ type: Actions.CHECKOUT, payload:2})
    })
  }

}
