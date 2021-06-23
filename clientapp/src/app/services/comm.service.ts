import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommService {

  nickname: string = "";
  url = 'http://localhost:8080/chat'

  constructor(private _http: HttpClient) { }

  sendMessage(content: string) {
    console.log({name: this.nickname, content: content})
    return this._http.post(this.url, {name: this.nickname, content: content});
  }
}
