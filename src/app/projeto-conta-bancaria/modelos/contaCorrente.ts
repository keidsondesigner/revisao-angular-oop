import { ContaBancaria } from "./contaBancaria";

export class ContaCorrente extends ContaBancaria {

  constructor(
    titular: string,
  ) {
    // super() chamar o construtor da super-classe(Class mãe);
    super(titular);
  }

  public override sacar(saque: number): void {
    if (this.saldo >= saque) {
      this.saldo -= saque;
    } else {
      console.error('Saldo insuficiente.');
    }
  }

  public override getTipoConta(): string {
    return 'Conta Corrente';
  }
}
