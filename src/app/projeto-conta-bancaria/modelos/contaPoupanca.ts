import { ContaSalario } from "./contaSalario";

// Todas as propriedades e métodos da Class ContaBancaria e Class ContaCorrente
// estarão disponíveis na class ContaSalario com o extends;
export class ContaPoupanca extends ContaSalario {
  constructor(titular: string) {
    // super() chamar o construtor da super-classe(Class mãe);
    super(titular);
  }

  public override getTipoConta(): string {
    return 'Conta Poupança';
  }
}
