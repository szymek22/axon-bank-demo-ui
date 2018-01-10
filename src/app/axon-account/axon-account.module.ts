import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAccountsComponent } from './list-accounts/list-accounts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountService } from "./account.service";
import {AddAccountComponent, DialogDataExampleDialog} from './add-account/add-account.component';
@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],

  providers: [AccountService],
  entryComponents: [DialogDataExampleDialog],
  declarations: [ListAccountsComponent, AccountService, AddAccountComponent, DialogDataExampleDialog]
})
export class AxonAccountModule { }
