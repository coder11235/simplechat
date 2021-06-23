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

  sub(nick: string, event: any) {
    event.preventDefault()
    this._comm.nickname = nick
    this.cookie.set('nick', nick);
    this.dialogref.close();
  }

  nope(event: any) {
    event.preventDefault();
    this.dialogref.close();
  }

}
