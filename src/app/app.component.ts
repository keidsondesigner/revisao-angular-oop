import { Component, OnInit } from '@angular/core';
import { MinhaPrimeiraClass } from './fundamentos/01classes/minhaPrimeiraClass';
import { MinhaSegundaClass } from './fundamentos/01classes/minhaSegundaCLass';
import { Aluno } from './fundamentos/01classes/aluno';
import { ClienteNormal } from './modelos/clienteNormal';
import { QuartoSimples } from './modelos/quartoSimples';
import { Reserva } from './modelos/reserva';
import { QuartoLuxo } from './modelos/quartoLuxo';
import { ClienteVip } from './modelos/clienteVip';
import { Quarto } from './interfaces/quarto.interface';
import { HotelService } from './services/hotel.service';
import { Cliente } from './interfaces/cliente.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  title = 'fundamentos-oop';

  cliente: Cliente = {
    nome: '',
    tipo: 'normal',
    msgParabens: () => ''
  }

  quarto!: Quarto;
  tipoQuarto = '';
  qtdDias: number = 0;


  constructor(private hotelService: HotelService) { }


  ngOnInit() {
    const person1 = new MinhaPrimeiraClass('John', 30, 'Programmer');
    console.log(person1);
    console.log(person1.getAge());

    console.log('-------------------------');

    const person2 = new MinhaSegundaClass('Keidson', 25, 'Designer', '123456789');
    console.log(person2);
    console.log(person2.getInfoUser());

    console.log('-------------------------');
    // implentando uma interface
    const aluno = new Aluno('João', 'Silva', 20);
    console.log(aluno);

    const aluno2 = new Aluno('Pedro', 'Tavares', 18);
    console.log(aluno2);
    aluno2.setIdade(21);
    console.log(aluno2.getIdade());

    console.log('-------------------------Projeto Reserva de Quarto-------------------------');
    const cliente =  new ClienteNormal('João', 'NORMAL');
    const quarto = new QuartoSimples();
    const reserva = new Reserva(cliente, quarto, 3);
    console.log(reserva);
    console.log(reserva.getDetalhesReserva());

    const cliente2 =  new ClienteVip('Karol', 'VIP');
    const quarto2 = new QuartoLuxo();
    const reserva2 = new Reserva(cliente2, quarto2, 15);
    console.log(reserva2);
    console.log(reserva2.getDetalhesReserva());
  }


  fazerReserva() {
    this.criarCliente();

    const cliente = this.hotelService.getCliente();
    const quarto = this.hotelService.getQuarto();
    const reserva = new Reserva(cliente, quarto, this.qtdDias);

    this.hotelService.setReserva(reserva);
    console.log('Reservas: ', this.hotelService.getReservas());
  }


  criarCliente() {
    if(this.cliente.tipo === 'normal') {
      this.cliente = new ClienteNormal(this.cliente.nome, 'Normal');
      this.tipoQuarto = 'Simples';
    } else if(this.cliente.tipo === 'vip') {
      this.cliente = new ClienteVip(this.cliente.nome, 'VIP');
      this.tipoQuarto = 'Luxo';
    }

    this.hotelService.setCliente(this.cliente);
    this.escolherQuarto();
  }


  escolherQuarto() {
    if(this.tipoQuarto === 'Simples') {
      this.quarto = new QuartoSimples();
    } else if(this.tipoQuarto === 'Luxo') {
      this.quarto = new QuartoLuxo();
    }

    this.hotelService.setQuarto(this.quarto);
  }

}



// CONCEITO DE PROTOTYPE

// Interface são contratos, onde a class é quem vai implementa-lós;

// interface Protopype {
//   clone(): Protopype;
// }

// export class Person implements Protopype {

//   constructor(public name: string, public age: number) {}

//   clone(): this {
//     // Isso não é um clone!
//     // estamos apenas criando um novo objeto
//     // que tem este Objeto como protótiopo"prototype"(tem os mesmos valores dos anteriores)
//     const newPerson = Object.create(this);
//     return newPerson;
//   }
// }

// const person1 = new Person('John', 30);
// const person2 = person1.clone();

// console.log(person1.name); // John
// console.log(person2.name); // John
