import { Component, OnInit } from '@angular/core';
import { MinhaPrimeiraClass } from './fundamentos/01classes/minhaPrimeiraClass';
import { MinhaSegundaClass } from './fundamentos/01classes/minhaSegundaCLass';
import { Aluno } from './fundamentos/01classes/aluno';
import { ClienteNormal } from './modelos/clienteNormal';
import { QuartoSimples } from './modelos/quartoSimples';
import { Reserva } from './modelos/reserva';
import { QuartoLuxo } from './modelos/quartoLuxo';
import { ClienteVip } from './modelos/clienteVip';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  title = 'fundamentos-oop';

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
