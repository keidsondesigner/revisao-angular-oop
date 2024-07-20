import { ClienteAbstract } from "./cliente";

export class ClienteVip extends ClienteAbstract {

  constructor(nome: string, tipo: string) {
    super(nome, tipo);
  }
  public override msgParabens(): string {
    return 'Parabéns, obrigado por se tornar um cliente VIP ⭐ , ' + this.nome;
  }

}
