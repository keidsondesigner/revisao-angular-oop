import { Cliente } from "../interfaces/cliente.interface";
import { Quarto } from "../interfaces/quarto.interface";

export class Reserva {

  constructor(
    public cliente: Cliente,
    public quarto: Quarto,
    public diasReservado: number
  ) {}

  public valorTotal(): number {
    return this.quarto.valor * this.diasReservado;
  }

  public getDetalhesReserva(): string {
    return `
      ${this.cliente.msgParabens()}
      Detalhes da Reserva:
      Reserva do cliente ${this.cliente.nome} para o ${this.quarto.tipo},
      ${this.diasReservado} dias reservados.
    `;
  }
}
