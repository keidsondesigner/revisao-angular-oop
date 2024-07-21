import { ContaCorrente } from "./contaCorrente";

// Todas as propriedades e métodos da Class ContaBancaria e Class ContaCorrente
// estarão disponíveis na class ContaSalario com o extends;
export class ContaSalario extends ContaCorrente {
  constructor(titular: string) {
    // super() chamar o construtor da super-classe(Class mãe);
    super(titular);
  }

  public override getTipoConta(): string {
    return 'Conta Salário';
  }
}
