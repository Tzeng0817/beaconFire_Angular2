import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  @Input() value = 0;
  valueList:number[] = [];
  constructor() { }

  ngOnInit(): void {
    if(this.value % 2 != 0){
      this.value--;
    }

    while(this.value > 0) {
      this.valueList.unshift(this.value);
      this.value = this.value - 2;
    }
  }

}
