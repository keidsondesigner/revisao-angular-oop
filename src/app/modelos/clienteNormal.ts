import { ClienteAbstract } from "./cliente";

export class ClienteNormal extends ClienteAbstract {

  constructor(nome: string, tipo: string) {
    super(nome, tipo);
  }
  public override msgParabens(): string {
    return 'Parabéns, orbigado por se tornar um cliente, ' + this.nome;
  }

}
