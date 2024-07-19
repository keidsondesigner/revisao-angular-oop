//Interface são contratos, do que a class deve ter, e onde a class é quem vai implementá-los;

export interface Pessoa {
  nome: string;
  sobrenome: string;
  idade: number;
  nomeCompleto(): string;
}
