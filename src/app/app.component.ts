import {Component} from '@angular/core';
import {StompService} from "@stomp/ng2-stompjs";
import {Message} from "@stomp/stompjs";
import "rxjs/add/operator/map";
// var SockJS = require( 'sockjs-client');
// var Stomp = require( 'stompjs');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {

  }
}
