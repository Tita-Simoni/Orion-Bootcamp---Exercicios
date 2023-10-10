import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio01',
  templateUrl: './exercicio01.component.html',
  styleUrls: ['./exercicio01.component.css']
})
export class Exercicio01Component {
  userWord: string = '';
  numVowels: number | undefined;
  
  contVowels() {
    const vowels = this.userWord.match(/[aeiou]/gi);
    this.numVowels = vowels ? vowels.length : 0;
  }
}
