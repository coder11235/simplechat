import { Component, OnInit } from '@angular/core';
import { CommService } from 'src/app/services/comm.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private _comm: CommService) { }

  msgs = [
    {
      name: 'uday',
      content: 'something'
    }
  ]

  sendMessage($event: any, message: String)
  {
    $event.preventDefault();
    this._comm.sendMessage(message);
  }

  ngOnInit(): void {
  }

}
