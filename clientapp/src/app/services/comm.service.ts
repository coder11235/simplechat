import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommService {

  nickname: String = "";

  sendMessage(content: String) {
    console.log({name: this.nickname, content: content})
  }

  constructor() { }
}
