import {Component, OnInit} from '@angular/core';
import {AccountService} from "../account.service";

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.css']
})
export class ListAccountsComponent implements OnInit {
  private accounts: Array<Account>;
  public title : String= 'Axon Bank - demo';
  constructor(private accountService: AccountService) {
  }

  getAccounts(): void {
    this.accountService.list().subscribe(accounts => this.accounts = accounts);
  }

  ngOnInit() {
    this.getAccounts();
  }

  onCreateAccount(success: boolean){
    this.getAccounts();
  }

}
