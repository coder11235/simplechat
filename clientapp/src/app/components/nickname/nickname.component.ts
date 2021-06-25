import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { CommService } from 'src/app/services/comm.service';

@Component({
  selector: 'app-nickname',
  templateUrl: './nickname.component.html',
  styleUrls: ['./nickname.component.css']
})
export class NicknameComponent implements OnInit {

  constructor(private _comm: CommService, public dialogref: MatDialogRef<MatDialog>, private cookie: CookieService) { }

  ngOnInit(): void {
  }

  getnick() {
    return this._comm.nickname
  }

  getchan() {
    return this._comm.channel
  }

  sub(nick: string, event: any, chan: string) {
    event.preventDefault()
    this._comm.nickname = nick
    this._comm.channel = chan
    this.cookie.set('nick', nick);
    this.cookie.set('chan', chan);
    this.dialogref.close();
  }

  nope(event: any) {
    event.preventDefault();
    this.dialogref.close();
  }

}
