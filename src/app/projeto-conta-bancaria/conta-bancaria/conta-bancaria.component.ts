import { Component } from '@angular/core';
import { ContaBancaria } from '../modelos/contaBancaria';
import { ContaService } from '../services/conta.service';

@Component({
  selector: 'app-conta-bancaria',
  templateUrl: './conta-bancaria.component.html',
  styleUrls: ['./conta-bancaria.component.css']
})
export class ContaBancariaComponent {
  nome: string = '';
  contaBancaria: ContaBancaria | null = null;
  tipoConta: string = '';
  valorTransacao: number | null = null;

  constructor(private contaService: ContaService) { }

  criarConta() {
    if (this.nome && this.tipoConta) {
      switch (this.tipoConta) {
        case 'corrente':
          this.contaBancaria = this.contaService.criaContaCorrente(this.nome);
          console.log(this.contaBancaria);
          break;
        case 'salario':
          this.contaBancaria = this.contaService.criaContaSalario(this.nome);
          console.log(this.contaBancaria);
          break;
        case 'poupanca':
          this.contaBancaria = this.contaService.criaContaPoupanca(this.nome);
          console.log(this.contaBancaria);
          break;

        default:
          console.error('Tipo de conta inválido');
      }
    }
  }

  depositar() {
    if (this.valorTransacao && this.valorTransacao > 0) {
      this.contaBancaria && this.contaBancaria.depositar(this.valorTransacao);
      this.valorTransacao = null;
    }
  }

  sacar() {
    if (this.valorTransacao && this.valorTransacao > 0) {
      this.contaBancaria && this.contaBancaria.sacar(this.valorTransacao);
      this.valorTransacao = null;
    }
  }
}
