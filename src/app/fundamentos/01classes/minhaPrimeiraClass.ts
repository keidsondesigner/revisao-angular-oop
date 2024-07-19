export class MinhaPrimeiraClass {
  private name: string;
  private age: number;
  private position: string;

  constructor(nome: string, age: number, position: string) {
    this.name = nome;
    this.age = age;
    this.position = position;
  }

  // Quando usamos o get e set, na frente dos meus métodos
  // posso chamar o método como propriedade, sem usar parentenses "()"

  // exemplo:
  // const person1 = new MinhaPrimeiraClass('John', 30, 'Programmer');
  // person1.getName;
  // person1.setName = 'Karol';

  // public get getName() {
  //   return this.name;
  // }

  // public set setName(name: string) {
  //   this.name = name;
  // }

  public getPosition() {
    return this.position;
  }

  public getName() {
    return this.name;
  }

  public getAge() {
    return this.age;
  }

  public getInfoUser() {
    return this.name + ' ' + this.age + ' ' + this.position;
  }

  public setPosition(position: string) {
    this.position = position;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setAge(age: number) {
    this.age = age;
  }
}
