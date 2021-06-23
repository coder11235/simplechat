import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/interfaces/message';
import { CommService } from 'src/app/services/comm.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private _comm: CommService) { }

  msgs: Message[] = [
  ]

  sendMessage($event: any, message: string)
  {
    $event.preventDefault();
    this._comm.sendMessage(message)
    .subscribe((data: any) => {
      if(data.message == "successfull")
      {
        this.msgs.push({
          name: this._comm.nickname,
          content: message
        })
      }
      else {
        console.log(data.message)
      }
    })
  }

  ngOnInit(): void {
    this._comm.getMessages()
    .subscribe((data: any) => {
      console.log(data);
      this.msgs = data;
    })
  }

}
