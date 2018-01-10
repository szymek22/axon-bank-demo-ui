import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {AccountService} from "../account.service";
import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";
import {StompService} from "@stomp/ng2-stompjs";
import {Message} from "@stomp/stompjs";
import {MAT_DIALOG_DATA, MatDialog, MatSnackBar} from "@angular/material";
@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  providers: [],
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  private successObservable: Subscription;
  @Output() onCreateAccount = new EventEmitter<boolean>();
  constructor(private accountService: AccountService,
              private _stompService: StompService,
              public dialog: MatDialog,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  onActionCreate() {
    var observable = new Observable(observer => {
      var responseReturned: boolean = false;
      var messageReturned: boolean = false;
      let stomp_subscription = this._stompService.subscribe('/user/admin/status');

      let subscription = stomp_subscription.map((message: Message) => {
        return message.body;
      }).subscribe((msg_body: string) => {
        console.log(`Received: ${msg_body}`);
        this.onCreateAccount.emit(true);
        this.snackBar.open("The account has been created", "x", {verticalPosition: "top", horizontalPosition: "right"})
        messageReturned = true;
        observer.complete();
        subscription.unsubscribe();
      });


      this.accountService.add().subscribe(account => {
        responseReturned = true;
        console.info("Return response REST");
        setTimeout(() => {
          if (!messageReturned) {
            console.info("Waiting is to long");
            this.dialog.open(DialogDataExampleDialog, {
              data: {
                animal: 'panda'
              }
            });
            observer.error();
          }
        }, 4000);
      });

    });
    this.successObservable = observable.subscribe(
      () => {
      },
      () => {
      },
      () => {
      }
    );

  }

}

