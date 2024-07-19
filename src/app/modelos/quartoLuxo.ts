import { QuartoAbstract } from "./quarto";

export class QuartoLuxo extends QuartoAbstract {
  constructor(tipo: string, valor: number) {
    super(tipo = 'Quarto Luxo', valor = 400);
  }
}
