import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { NgRedux } from 'ng2-redux';

import { Counter } from '../components/Counter';
import { CounterInfo } from '../components/CounterInfo';
import { enhancers } from '../store';

import { rootReducer } from './root.reducer';
const createLogger = require('redux-logger');

@Component({
    selector: 'root',
    directives: [Counter, CounterInfo],
    pipes: [AsyncPipe],
    template: `
    <counter-info></counter-info>
    <counter></counter>
  `
})
export class App {

    constructor(private ngRedux: NgRedux<any>) {

        // Do this once in the top-level app component.
        this.ngRedux.configureStore(
          rootReducer,
            {},
            [ createLogger() ],
            enhancers
        );

    }

}
