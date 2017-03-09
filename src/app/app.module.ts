import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeView } from './home/home-view.component';
import { TransferHttpModule } from '../modules/transfer-http/transfer-http.module';
import { CounterView } from './counter/counter.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.store';
let rootReducer = { counter: counterReducer };

@NgModule({
	imports: [
    CommonModule,
    HttpModule,
    TransferHttpModule,
		RouterModule.forRoot([
			{ path: '', component: HomeView, pathMatch: 'full'},
			{ path: 'counter', component: CounterView, pathMatch: 'full'},
			{ path: 'lazy', loadChildren: './+lazy/lazy.module#LazyModule'}
		]),
		StoreModule.provideStore(rootReducer),
	],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/'}
  ],
	declarations: [ AppComponent, HomeView, CounterView ],
  exports: [ AppComponent ]
})
export class AppModule {}
