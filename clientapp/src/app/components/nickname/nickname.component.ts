import { Component, OnInit } from '@angular/core';
import { CommService } from 'src/app/services/comm.service';

@Component({
  selector: 'app-nickname',
  templateUrl: './nickname.component.html',
  styleUrls: ['./nickname.component.css']
})
export class NicknameComponent implements OnInit {

  constructor(private _comm: CommService) { }

  ngOnInit(): void {
  }

  onSubmit($event: any, nickname: String) {
    $event.preventDefault();
    this._comm.nickname = nickname;
  }

}
