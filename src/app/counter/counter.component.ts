import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './../store/counter.store';
import { AppState } from './../store/appState.store';

@Component({
    selector: 'counter-view',
    template: `
    <div>
        <button (click)="increment()">Increment</button>
        <div>Current Count: {{ counter | async }}</div>
        <button (click)="decrement()">Decrement</button>
        <button (click)="reset()">Reset Counter</button>
    </div>
    `
})
export class CounterView implements OnInit {
    counter: Observable<number>;

    constructor(private store: Store<AppState>) {
        this.counter = store.select('counter');
    }

    ngOnInit() {
        
    }

    increment() {
        this.store.dispatch({ type: INCREMENT });
    }

    decrement() {
        this.store.dispatch({ type: DECREMENT });
    }

    reset() {
        this.store.dispatch({ type: RESET });
    }
}
