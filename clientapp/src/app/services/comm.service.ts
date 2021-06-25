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
    console.log({name: this.nickname, content: content})
    return this._http.post(this.url, {name: this.nickname, content: content});
  }

  getMessages() {
    return this._http.get<Message[]>(this.url)
  }
}
