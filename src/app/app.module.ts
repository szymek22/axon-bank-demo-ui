import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";


import {AppComponent} from './app.component';
import {ListAccountsComponent} from "./axon-account/list-accounts/list-accounts.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AccountService} from "./axon-account/account.service";
import {AddAccountComponent, DialogDataExampleDialog} from "./axon-account/add-account/add-account.component";
import {StompConfig, StompService} from "@stomp/ng2-stompjs";
import {Angular2PromiseButtonModule} from "angular2-promise-buttons";
import {MatDialogModule, MatSnackBarModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const stompConfig: StompConfig = {
  // Which server?
  url: 'ws://localhost:4200/ws',

  headers: {
  },

  heartbeat_in: 0,
  heartbeat_out: 20000,
  reconnect_delay: 5000,

  debug: false
};
@NgModule({
  declarations: [
    AppComponent, ListAccountsComponent, AddAccountComponent, DialogDataExampleDialog
  ],
  entryComponents: [DialogDataExampleDialog],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    Angular2PromiseButtonModule.forRoot({
      // your custom config goes here
      spinnerTpl: '<i class="btn-spinner fa fa-circle-o-notch fa-spin fa-fw"></i>',
      // disable buttons when promise is pending
      disableBtn: true,
      // the class used to indicate a pending promise
      btnLoadingClass: 'is-loading',
      // only disable and show is-loading class for clicked button,
      // even when they share the same promise
      handleCurrentBtnOnly: false,
    })
  ],
  providers: [AccountService,
    StompService,
    {
      provide: StompConfig,
      useValue: stompConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
