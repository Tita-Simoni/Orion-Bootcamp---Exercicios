import { Component } from '@angular/core';

/**
 * Componente em Angular para o Exercício 01
 * Este componente permite contar o número de vogais em uma palavra fornecida pelo usuário
 */

/**
 * Novo envio para avaliação e pull request!
 */

@Component({
  selector: 'app-exercicio01',
  templateUrl: './exercicio01.component.html',
  styleUrls: ['./exercicio01.component.css']
})

export class Exercicio01Component {
  /**
   * A palavra inserida pelo usuário
  */
  userWord: string = '';

  /**
   * O número de vogais da palavra
   */
  numVowels: number | undefined;
  
  /**
   * Função para contar o número de vogais da palavra inserida pelo usuário
   */
  countVowels(): void {
    /**
     * Expessão redular para encontrar todas as vogais na palavra
     */
    const vowels = this.userWord.match(/[aeiou]/gi);

    /**
     * Atribui o número de vogais à variável numVowels
     */
    this.numVowels = vowels ? vowels.length : 0;
  }
}
