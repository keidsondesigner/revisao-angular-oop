import { QuartoAbstract } from "./quarto";

export class QuartoSimples extends QuartoAbstract {

  constructor(tipo: string, valor: number) {
    super(tipo = 'Quarto Simples', valor = 100);
  }
}
