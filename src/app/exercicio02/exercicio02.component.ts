import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio02',
  templateUrl: './exercicio02.component.html',
  styleUrls: ['./exercicio02.component.css']
})
export class Exercicio02Component {
  lista: Array<{ id: number, name: string, bio: string }> = [
    {"id" : 1, 
      "name": "Ada Lovelace", 
      "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, 
      "name": "Alan Turing", 
      "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
    {"id" : 3, 
      "name": "Nikola Tesla", 
      "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, 
      "name": "Nicolau Copérnico", 
      "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
  ];  

  // Funções com o paradgima funcional:

  getBioFunctional(id: number): string {
    const item = this.lista.find(item => item.id === id);
    return item ? item.bio: "ID não encontrado";
  }

  getNameFunctional(id:number): string {
    const item = this.lista.find(item=> item.id===id);
    return item ? item.name: "ID não encontrado";
  }

  deleteItemFunctional(lista: Array<any>, id: number): Array<any> {
    return lista.filter(item => item.id !== id);
  }

  updateItemFunctional(lista: Array<any>, id: number, prop: string, value: string): Array<any> {
    return lista.map(item => {
      if (item.id === id) {
        return { ...item, [prop]: value };
      }
      return item;
    });
  }

  // Funções com o paradigma imperativo:

  getBioImperative(list: Array<any>, id: number): string {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        return list[i].bio;
      }
    }
    return "ID não encontrado";
  }

  getNameImperative(list: Array<any>, id: number): string {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        return list[i].name;
      }
    }
    return "ID não encontrado";
  }

  deleteItemImperative(list: Array<any>, id: number): void {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        list.splice(i, 1);
        return
      }
    }
  }

  updateItemImperative(list: Array<any>, id: number, prop: string, value: string): void {
    for (let i = 0; i <= list.length-1; ++i){
      if (list[i].id === id) {
        list[i][prop] = value;
        return
      }
    }
  }

}