// Uma classe abstrata, contém apenas as regras de negócio
export abstract class ContaBancaria {
  constructor(
    public titular: string,
    protected saldo: number = 0,
  ) {}

  depositar(deposito: number) {
    this.saldo += deposito;
  }

  // método abstrato, quem herdar essa classe, tem que implementar;
  abstract sacar(saque: number): void;

  getSaldo(): number {
    return this.saldo;
  }
}
