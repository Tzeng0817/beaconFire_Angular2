import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  second = 0;
  myfunction: any;
  constructor() { }

  ngOnInit(): void {
  }

  isStart: boolean = true;

  @Output() newItemEvent = new EventEmitter<number>();

  startGame() {
    this.myfunction = setInterval(() =>{ 
      this.second++;
    }, 1000);
  }

  stopGame() {
    clearInterval(this.myfunction)
    this.second = 0;
  }


}
