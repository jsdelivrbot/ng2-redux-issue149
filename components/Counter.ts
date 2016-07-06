import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { SearchActions } from '../search/search.actions';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'counter',
  providers: [ SearchActions ],
  template: `
  <p>
    Matches: {{ counter }}
    <input id='search-input' type="text" class="search"
    [(ngModel)]="keyword" (ngModelChange)="searchKeyword()"/>
  </p>
  `
})
export class Counter {
  counter$: Observable<any>;
  counter;
  keyword: string;

  constructor(private actions: SearchActions, private ngRedux: NgRedux<any>) {}

  ngOnInit() {
    this.counter$ = this.ngRedux.select(state => state.searchReducer.total);
    this.counter$.subscribe(state =>
    this.counter = state)
  }

  private searchKeyword() {
    this.actions.searchDispatch(this.keyword);
  }
}
