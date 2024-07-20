import { Quarto } from './../interfaces/quarto.interface';
import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/cliente.interface';
import { Reserva } from '../modelos/reserva';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private cliente!: Cliente;
  private quarto!: Quarto;
  private reservas: Reserva[] = [];

  constructor() { }

  setCliente(cliente: Cliente) {
    this.cliente = cliente;
  }

  getCliente(): Cliente {
    return this.cliente;
  }

  setQuarto(quarto: Quarto) {
    this.quarto = quarto;
  }

  getQuarto(): Quarto {
    return this.quarto;
  }

  setReserva(reserva: Reserva) {
    this.reservas.push(reserva);
  }

  getReservas(): Reserva[] {
    return this.reservas;
  }
}
