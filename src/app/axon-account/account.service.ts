import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Account} from "./model/account";

@Injectable()
export class AccountService {

  private readonly URL = "/api/account";
  private readonly CREATE_URL = "/api/account/action/create";

  constructor(private httpClient: HttpClient) {

  }

  public list():Observable<Array<Account>>{
    return this.httpClient.get<Array<Account>>(this.URL);
  }

  public add(): Observable<Account> {
    return this.httpClient.post<Account>(this.CREATE_URL, {});
  }
}
