import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  username:string;
  clearDisabled = true;
  constructor() { }

  oninput(event) {
    this.username = (<HTMLInputElement>event.target).value;
    if(this.username === "")
      this.clearDisabled = true;
    else this.clearDisabled = false;
  }

  onclear() {
    this.username = "";
    this.clearDisabled = true;
  }
}
