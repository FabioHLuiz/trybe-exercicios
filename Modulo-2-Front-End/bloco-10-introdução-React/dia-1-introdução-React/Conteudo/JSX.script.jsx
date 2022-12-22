const element = <h1>Hello, world!</h1>;

// Incorporando expressões no JSX

// Por ser um código Javascript, o JSX permite injeções de algoritmos dentro da estrutura HTML. Portanto, é possivel que se aplique diretamente na estrutura da aplicação códigos que renderizarão outras diversas expressões, por exemplo:


const nome = 'Jorge Maravilha';
const element = <h1>Hello, {nome}</h1>;

////////////////////////////////////////////////////////////////////


// E se aprofundarmos um pouco mais chamando uma função na nossa constante element?

const nomeCompleto = (nome, sobrenome) => {
  return `${nome} ${sobrenome}`;
}

const element = <h1>Hello, { nomeCompleto('Jorge', 'Maravilha') }</h1>;

////////////////////////////////////////////////////////////////////


// Agora, vamos incorporar a nossa constante element na função helloWorld, retornar um código JSX e encapsulá-la em uma div:

const helloWorld = (nome, sobrenome) => {
  return <h1>Hello, {`${nome} ${sobrenome}`}</h1>;
}

////////////////////////////////////////////////////////////////////


// Lembra que falamos sobre a substituição de class por className em JSX? Podemos também utilizar expressões Javascript para atribuir valor à este atributo.

const element = helloWorld('Jorge', 'Maravilha');
const container = <div>{element}</div>;

const nome = 'Jorge Maravilha';
const classe = 'hello-class';
const element = <h1 className={classe}>Hello, {nome}</h1>;