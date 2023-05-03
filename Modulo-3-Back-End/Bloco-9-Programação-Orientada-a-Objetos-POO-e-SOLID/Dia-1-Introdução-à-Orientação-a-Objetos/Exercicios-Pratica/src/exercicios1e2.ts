// Exercício 1: Vamos modelar algumas partes de um software de uma escola. Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina. Cada objeto dessa classe deve conter os seguintes dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.

class Student {
  private _matricula: string;

  private _nome: string;

  private _nProva: number[] = Array(0);

  private _nTrabalho: number[] = Array(0);

  constructor(
    matricula: string,
    nome: string,
    nProva: number[],
    nTrabalho: number[],
  ) {
    this._matricula = matricula;
    this._nome = nome;
    this.nProva = nProva;
    this.nTrabalho = nTrabalho;
  }

  get matricula(): string {
    return this._matricula;
  }

  set matricula(value: string) {
    this._matricula = value;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }

    this._nome = value;
  }

  get nProva(): number[] {
    return this._nProva;
  }

  set nProva(value: number[]) {
    if (value.length !== 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    }

    this._nProva = value;
  }

  get nTrabalho(): number[] {
    return this._nTrabalho;
  }

  set nTrabalho(value: number[]) {
    if (value.length !== 2) {
      throw new Error(
        'A pessoa estudante só pode possuir 2 notas de trabalhos.',
      );
    }

    this._nTrabalho = value;
  }

  //   Exercício 2
  //   Agora vamos adicionar à nossa classe de pessoa estudante os comportamentos. Para isso adicione dois métodos: um que calcula a soma das notas da pessoa estudante e outro que calcula a média das notas da pessoa estudante.

  sumNotas(): number {
    return [...this.nProva, ...this.nTrabalho].reduce((previousNota, notas) => {
      // eslint-disable-next-line no-param-reassign
      notas += previousNota;
      return notas;
    }, 0);
  }

  sumMedia(): number {
    const sumNotas = this.sumNotas();
    const divider = this.nProva.length + this.nTrabalho.length;

    return Math.round(sumNotas / divider);
  }
}

const student1 = new Student('1234', 'Fabio', [5, 6, 7, 2], [9, 10]);
console.log(student1);
console.log('Soma das notas:', student1.sumNotas());
console.log('Média:', student1.sumMedia());

const student2 = new Student('1234', 'Luis', [1, 2, 3, 4], [10, 10]);
console.log(student2);
console.log('Soma das notas:', student2.sumNotas());
console.log('Média:', student2.sumMedia());

export default Student;
