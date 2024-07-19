import { MinhaPrimeiraClass } from "./minhaPrimeiraClass";

export class MinhaSegundaClass extends MinhaPrimeiraClass {
  private cpf: string;

  constructor(name: string, age: number, position: string, cpf: string) {
    super(name, age, position);
    this.cpf = cpf;
  }

  //override "sobreescrevendo" o método da Super-Class
  public override getInfoUser() {
    // Faço alguma coisa antes do método getNomeCompleto() da Super-Class
		console.log('Fazaendo algo antes da execução do método da Super-Class');
		// super no método é obrigatório;
		// diparando o método getNomeCompleto() da Super-Class
    const result = super.getInfoUser() + ' ' + this.cpf;
    return result + ' Alguma coisa.';
  }
}
