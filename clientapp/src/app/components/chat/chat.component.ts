import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/interfaces/message';
import { CommService } from 'src/app/services/comm.service';
import env from '../../../environments/environment'
import pusher from 'pusher-js'
import { MatDialog } from '@angular/material/dialog';
import { NicknameComponent } from '../nickname/nickname.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private _comm: CommService, private _d: MatDialog, private cookie: CookieService) { }
  channel: any = null;

  msgs: Message[] = [
  ]

  reopen() {
    this._d.open(NicknameComponent, {
      height: '250px',
      width: '250px'
    })
  }
  sendMessage($event: any, message: string)
  {
    $event.preventDefault();
    if(this._comm.validatemsg(message))
    {
      this._comm.sendMessage(message)
      .subscribe((data: any) => {
        if(data.message == "successfull")
        {
          console.log('message sent')
        }
        else {
          console.log(data.message)
        }
      })
    }
  }

  ngOnInit(): void {
    let p = new pusher(env.key, {
      cluster: env.cluster
    })
    if(!this.cookie.check('nick') || !this.cookie.check('chan'))
    {
      this.reopen();
    }
    else
    {
      this._comm.nickname = this.cookie.get('nick');
      this._comm.channel = this.cookie.get('chan');
    }
    this.channel = p.subscribe(this._comm.channel)
    this.channel.bind('recv_msg', (data: any) => {
      console.log(data);
      this.msgs.push(data.message);
    })
    this._comm.getMessages()
    .subscribe((data: any) => {
      console.log(data);
      this.msgs = data;
    })
  }
}
