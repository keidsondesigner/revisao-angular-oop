import { Injectable } from '@angular/core';
import { ContaBancaria } from '../modelos/contaBancaria';
import { ContaCorrente } from '../modelos/contaCorrente';
import { ContaSalario } from '../modelos/contaSalario';
import { ContaPoupanca } from '../modelos/contaPoupanca';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  contaBancaria: ContaBancaria | null = null;

  constructor() { }

  criaContaCorrente(titular: string): ContaBancaria {
    this.contaBancaria = new ContaCorrente(titular);
    return this.contaBancaria;
  }

  criaContaSalario(titular: string): ContaBancaria {
    this.contaBancaria = new ContaSalario(titular);
    return this.contaBancaria;
  }

  criaContaPoupanca(titular: string): ContaBancaria {
    this.contaBancaria = new ContaPoupanca(titular);
    return this.contaBancaria;
  }

  getContaBancaria(): ContaBancaria | null {
    return this.contaBancaria;
  }
}
