import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  password = '';
  letter: boolean = false;
  number: boolean = false;
  symbol: boolean = false;

  length: number = 0;
  onchangeletter() {
    this.letter = !this.letter;
  }
  onchangenumber() {
    this.number = !this.number;
  }
  onchangesymbol() {
    this.symbol = !this.symbol;
  }
  looklength(lvalue: string) {
    this.length = parseInt(lvalue);
  }
  onclick() {
    let generatedpassword = ''
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()";
    let characters = '';
    if (this.letter) {
      characters += letters;

    }
    if (this.number) {
      characters += numbers;

    }
    if (this.symbol) {
      characters += symbols;

    }
    for (let i = 0; i < this.length; i++) {
      let index = Math.floor(Math.random() * (characters.length));
      generatedpassword += characters[index];
    }
    this.password = generatedpassword;
  }

}
