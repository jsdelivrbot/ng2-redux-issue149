import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgRedux } from 'ng2-redux';
import 'rxjs/add/operator/combineLatest';
import { SearchActions } from '../search/search.actions';

@Component({
    selector: 'counter-info',
    providers: [SearchActions],
    template: `
  <ul>
     <li>{{ search$ | async | json}}</li>
  </ul>
  `
})
export class CounterInfo {

    private search$: Observable<any>;
    private test;

    constructor(private ngRedux: NgRedux<any>, private actions: SearchActions) { }

    ngOnInit() {
        this.search$ = this.ngRedux.select(state => state.searchReducer.keyword);
        this.search$.subscribe((keyword) => {
            if (keyword != '') {
                this.actions.fetchResultDispatch(Math.floor(Math.random()*11))
            }
        });
    }
}
