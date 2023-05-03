// A liderança da empresa que você trabalha te pediu para implementar um projeto de desenvolvimento que consiste em um simples gerenciador e-mails.

// Para isso, você precisa de:

// Uma modelagem de representação genérica de um email

// Todo e-mail criado deve possuir os campos:

// Endereço de e-mail da pessoa remetente

// Endereço de e-mail da pessoa destinatária

// Assunto da mensagem, que não pode ter mais de 20 caracteres

// Mensagem

// Todo e-mail criado deve ter sua representação textual, que combina todos os dados em uma string única

// Uma representação genérica de uma lista de e-mails (mailList)

// A lista de e-mails deve ser capaz de retornar e-mails filtrados por pessoa remetente, destinatária ou por assunto.

// Agora que você sabe os fundamentos de POO, vamos ver uma possível solução para o problema inicial?

// Primeiramente vamos criar a classe Email. Ela será responsável por guardar os dados do e-mail na forma de atributos. Além disso, Email possui alguns métodos, sendo o mais importante deles o get content, que retorna uma string formatada com todo o corpo do e-mail.

class Email {
  private _from: string;

  private _to: string;

  private _message: string;

  private _subject: string;

  constructor(from: string, to: string, subject: string, message: string) {
    this._from = from;
    this._to = to;
    this._message = message;
    this._subject = subject;
  }

  set subject(newSubject: string) {
    if (newSubject.length <= 40) this._subject = newSubject;
  }

  get subject(): string {
    return this._subject;
  }

  get from(): string {
    return this._from;
  }

  get to(): string {
    return this._to;
  }

  get content(): string {
    return `
      From ${this._from} to ${this._to}
      ${this.subject}
  
      ${this._message}`;
  }
}

//   É interessante observar o uso do encapsulamento na manipulação dos atributos, com destaque para a validação do comprimento do campo assunto.

// Em seguida vem a criação da classe MailList, que representa uma lista de e-mails. Esta é uma classe muito interessante, pois nos permite manter todos os e-mails correlacionados em um único objeto. Além disso, nos permite filtrar os e-mails da lista de forma simplificada, utilizando abstração.

class MailList {
  // Essa sintaxe no construtor é chamada `Parameter Properties`
  // É um atalho para declarar e automaticamente atribuir o valor que será recebido via parâmetro ao atributo privado `mailList`
  constructor(private mailList: Email[] = []) {}

  get all(): Email[] {
    return this.mailList;
  }

  getEmailsBySender(mailAddress: string): Email[] {
    return this.mailList.filter((mail) => mail.from === mailAddress);
  }

  getEmailsTo(mailAddress: string): Email[] {
    return this.mailList.filter((mail) => mail.to === mailAddress);
  }

  getEmailsBySubject(searchString: string): Email[] {
    return this.mailList.filter(
      (mail) => mail.subject.indexOf(searchString) !== -1
    );
  }

  addEmail(newMail: Email): void {
    this.mailList.push(newMail);
  }

  removeEmail(mailToRemove: Email): void {
    // note que como essa é uma comparação de objetos, esse filter só funcionará se a referência de `mail` e `mailToRemove` for a mesma
    this.mailList = this.mailList.filter((mail) => mail !== mailToRemove);
  }
}

//   Com isso conseguimos criar listas de e-mails diferentes, cada uma possuindo e-mails diferentes. Essas listas já são criadas com a possibilidade de filtrarmos os e-mails, o que é muito útil.

// Que tal testar? Experimente rodar o seguinte código:

// Para testar
const friendEmail = 'friend@personalmail.com';
const myEmail = 'me@personalmail.com';

const email1 = new Email(
  myEmail,
  friendEmail,
  'Car wash',
  "There's a new car wash in town. Did you know?"
);
const email2 = new Email(
  friendEmail,
  myEmail,
  'Reply - Car wash',
  'Great! My car is really dirty. How much do they charge?'
);
const email3 = new Email(
  myEmail,
  friendEmail,
  'Reply - Reply - Car wash',
  '$5.00, and you get a free polishing cloth'
);
const email4 = new Email(
  'me@companymail.com',
  'ceo@companymail.com',
  'Day off monday',
  `Next Tuesday is a holiday.
  Are we going to work on Monday?`
);
const email5 = new Email(
  'ceo@companymail.com',
  'me@companymail.com',
  'Reply - Day off monday',
  'The entire company will have a day off on monday =D'
);

const personalMailList = new MailList([email1, email2, email3]);
const professionalMailList = new MailList([email4, email5]);

console.log(
  "------ personalMailList.getEmailsBySender('me@personalmail.com'):"
);
personalMailList
  .getEmailsBySender(myEmail)
  .forEach((mail) => console.log(mail.content));

const email6 = new Email(
  myEmail,
  'friend2@personalmail.com',
  'Day off monday',
  `Oh yes!
   My boss says we'll have Monday off.
   Want to go to the movies?`
);

personalMailList.addEmail(email6);
personalMailList.addEmail(email5); // Adicionado erroneamente

console.log("------ personalMailList.getEmailsBySubject('Day off'):");
personalMailList
  .getEmailsBySubject('Day off')
  .forEach((mail) => console.log(mail.content));
personalMailList.removeEmail(email5);

console.log('------ professionalMailList.all:');
professionalMailList.all.forEach((mail) => console.log(mail.content));

console.log('------ personalMailList.all:');
personalMailList.all.forEach((mail) => console.log(mail.content));
