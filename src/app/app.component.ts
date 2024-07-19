import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'fundamentos-oop';
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
