import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import pusher from 'pusher-js'
import { Message } from '../interfaces/message';

@Injectable({
  providedIn: 'root'
})
export class CommService {

  nickname = "";
  url = 'http://localhost:8080/chat'
  channel = ""

  constructor(private _http: HttpClient) { }

  sendMessage(content: string) {
    let data = {name: this.nickname, content: content, channel: this.channel}
    console.log(data)
    return this._http.post(this.url, data);
  }

  getMessages() {
    return this._http.get<Message[]>(this.url)
  }
}
