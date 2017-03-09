import { AppState } from './store/appState.store';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core'
import { TransferState } from '../modules/transfer-state/transfer-state';

@Component({
  selector: 'demo-app',
  template: `
	  <h1>Universal Demo</h1>
    <a routerLink="/">Home</a>
    <a routerLink="/counter">Counter</a>
	  <a routerLink="/lazy">Lazy</a>
	  <router-outlet></router-outlet>
	`,
  styles: [
    `h1 {
      color: green;
    }`
  ]
})
export class AppComponent implements OnInit {
  constructor(private cache: TransferState, private store: Store<AppState>) { }
  ngOnInit() {
    this.cache.set('cached', true);
  }

  ngAfterViewChecked() {
    // Write the full store to the cache.
    this.syncCache();
  }

  /**
   * Syncs the store so that the client can pick it up.
   */
  syncCache() {
    this.store.take(1).subscribe(state => {
      // state is available synchronously
      this.cache.set('state', state);
    });
  }
}
