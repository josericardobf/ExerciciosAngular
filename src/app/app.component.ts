import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nomes: string[] = ['joao', 'maria', 'jose', 'pedro', 'felipe', 'calos'];

  pessoas: any = [
    { id: 1, nome: 'joao',   salario: 5000},
    { id: 2, nome: 'maria',  salario: 1000},
    { id: 3, nome: 'jose',   salario: 2000},
    { id: 4, nome: 'pedro',  salario: 3000},
    { id: 5, nome: 'felipe', salario: 10000},
    { id: 6, nome: 'carlos', salario: 800}
  ]

  getValorTotal(): Number {
    return this.pessoas.reduce(
      (soma, pessoa) => soma + pessoa.salario, 0);
  }

  buscarId(id) {
    return this.pessoas.find(pessoa => pessoa.id == id);
  }

  aumentarSalario(percentual) {
    this.pessoas.map(pessoa => pessoa.salario += pessoa.salario * percentual / 100)
  }

  nomesFiltro: string[];

  buscar(valor: string) {
    this.nomesFiltro = [];

    // Metodo 1
    /*for(var i = 0; i < this.nomes.length; i++) {
      if(this.nomes[i].toLowerCase().includes(valor.toLowerCase())) {
        this.nomesFiltro.push(this.nomes[i]);
      }
    }*/

    // Metodo 2
    /*let temp = [];
    this.nomes.forEach(buscarItem);

    function buscarItem(nome) {
      if(nome.toLowerCase().includes(valor.toLowerCase())) {
        temp.push(nome);
      }
    }
    this.nomesFiltro = temp;*/

    // Metodo 3
    /*this.nomesFiltro = this.nomes.filter(function (nome) {
      return nome.toLowerCase().includes(valor.toLowerCase());
    });*/

    // Metodo 4
    this.nomesFiltro = this.nomes.filter(
    (nome) => nome.toLowerCase().includes(valor.toLowerCase()));
  }
}
