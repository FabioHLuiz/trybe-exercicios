// Composição de componentes

// Componentes são utilizados para construir uma aplicação React. Você sabe como como essa construção é feita? Em React, faz-se o uso da composição de componentes.

// Antes de nos aprofundarmos no assunto, vamos refletir:

// De modo geral, o que é composição? São elementos ordenados de forma a constituir algo maior e mais complexo. São, por exemplo, as músicas em um álbum musical, as frutas em uma salada de frutas ou até mesmo os inputs, as labels e os buttons em um form. Como você já deve ter percebido, composições já fazem parte do nosso cotidiano e, com o uso do React, isso se tornará ainda mais comum.

// Finalizada nossa reflexão, vamos avançar no conteúdo. 🚀

// Você sabia que Componentes React podem conter um ou mais componentes!? Essa é uma funcionalidade muito importante do React, pois permite a reutilização e redução do nível de complexidade dos códigos.

// Vamos refatorar o código abaixo para compreendermos ,na prática, a composição de componentes e seus benefícios. O código a seguir renderiza informações básicas sobre dois álbuns do Coldplay.

// src/App.js
import React from 'react';

class App extends React.Component {
  render() {
    // Declaração do objeto contendo informações do album01
    const album01 = {
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Coldplay_-_Mylo_Xyloto_%28Official_Album_Cover%29.png/220px-Coldplay_-_Mylo_Xyloto_%28Official_Album_Cover%29.png',
      title: 'Mylo Xyloto',
      releaseDate: {
        year: '2011',
        month: '10',
        day: '24',
      },
      others: {
        recordCompany: 'Capitol, Parlophone',
        formats: 'CD, digital'
      }
    };

    // Declaração do objeto contendo informações do album02
    const album02 = {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
      title: 'Ghost Stories',
      releaseDate: {
        year: '2014',
        month: '05',
        day: '16',
      },
      others: {
        recordCompany: 'Parlophone',
        formats: 'CD, digital'
      }
    };

    // Retorno do que será renderizado
    return (
      <article>
        <section>
          <img src={ album01.image } alt={ album01.title } />
          <h2>{ album01.title }</h2>
          <p>Lançamento: { album01.releaseDate.year }</p>
          <p>Gravadora: { album01.others.recordCompany }</p>
          <p>Formatos: { album01.others.formats }</p>
        </section>
        <section>
          <img src={ album02.image } alt={ album02.title } />
          <h2>{ album02.title }</h2>
          <p>Lançamento: { album02.releaseDate.year }</p>
          <p>Gravadora: { album02.others.recordCompany }</p>
          <p>Formatos: { album02.others.formats }</p>
        </section>
      </article>
    );
  }
}

export default App;

// Você pode ter percebido que o código, apesar de conter pouca lógica, está extenso. Ambas as sections, apesar de possuirem estruturas semelhantes, renderizam informações diferentes. Imagine o tamanho do código se tivéssemos cinco álbuns e quem sabe dez?

// Percebe-se que, nesse contexto, a section é uma excelente candidata a ser transformada em um componente reutilizável, dando início à nossa refatoração. Para isso, vamos criar um novo arquivo, chamado Album.js de modo a armazenar o código das sections e adaptá-lo para fazer a leitura das props que iremos passar futuramente:

// /src/components/Album.js
import React from 'react';

class Album extends React.Component {
  render() {
    const { album } = this.props;
    return (
      <section>
        <img src={ album.image } alt={ album.title } />
        <h2>{ album.title }</h2>
        <p>{ album.releaseDate.year }</p>
        <p>
          Lançamento:
          { `${ album.releaseDate.day }/${ album.releaseDate.month }/${ album.releaseDate.year }` }
        </p>
        <p>Gravadora: { album.others.recordCompany }</p>
        <p>Formatos: { album.others.formats }</p>
      </section>
    );
  }
}

export default Album;

// Em seguida, vamos refatorar o App.js. Para substituirmos as sections pelo novo componente criado, temos que:

//1° Importá-lo no arquivo App.js:

// src/App.js
import React from 'react';
import Album from './components/Album'

//2° Passar as props apropriadas:

// src/App.js
class App extends React.Component {
  ...
  render() {
    return (
      <div>
        <Album album={ album01 } />
        <Album album={ album02 } />
      </div>
    );
  }
}
...

// Desse modo, o componente App.js ficará assim:

// src/App.js
import React from 'react';
import Album from './components/Album'

class App extends React.Component {
  render() {
    const album01 = {
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Coldplay_-_Mylo_Xyloto_%28Official_Album_Cover%29.png/220px-Coldplay_-_Mylo_Xyloto_%28Official_Album_Cover%29.png',
      title: 'Mylo Xyloto',
      releaseDate: {
        year: '2011',
        month: '10',
        day: '24',
      },
      others: {
        recordCompany: 'Capitol, Parlophone',
        formats: 'CD, digital'
      }
    };

    const album02 = {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
      title: 'Ghost Stories',
      releaseDate: {
        year: '2014',
        month: '05',
        day: '16',
      },
      others: {
        recordCompany: 'Parlophone',
        formats: 'CD, digital'
      }
    };

    return (
      <div>
        <Album album={ album01 } />
        <Album album={ album02 } />
      </div>
    );
  }
}

export default App;

// Observe como o código ficou mais limpo e melhor de ler. Aqui, o nosso componente App contém dois componentes Álbum. Isso é composição de componentes! Cada um desses componentes **recebe um objeto diferente por meio da prop album.

// Note que os dois componentes irmãos <Album />, são, na realidade, o mesmo componente, porém reutilizados com base nas props recebidas, ou seja, apesar de serem o mesmo componente, renderizam informações diferentes, uma vez que recebem props diferentes.

// À primeira vista, componentizar a aplicação em uma combinação de componentes React pode parecer um processo pesado e complexo. No entanto, conforme a aplicação cresce, ter à disposição uma gama de componentes reutilizáveis e de baixo nível de complexidade individual facilitará muito o trabalho!

// Analise os trechos de código do exemplo abaixo para ver uma aplicação prática de como o conceito de composição funciona:

// arquivo scr/Image.js
import React from 'react';

class Image extends React.Component {
  render() {
    const { source, alternativeText } = this.props;
    return <img src={ source } alt={ alternativeText } />;
  }
}

export default Image;

////////////////////////////////////////////////////////////////////////////////////////

// arquivo scr/UserProfile.js
import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <p> { user.name } </p>
        <p> { user.email } </p>
        <Image source={ user.avatar } alternativeText="User avatar" />
      </div>
    );
  }
}

export default UserProfile;

////////////////////////////////////////////////////////////////////////////////////////

// arquivo scr/App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

class App extends React.Component {
  render() {
    const joao = {
      id: 102,
      name: 'João',
      email: 'joao@gmail.com',
      avatar: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png'
    };

    const amelia = {
      id: 77,
      name: 'Amélia',
      email: 'amelia@gmail.com',
      avatar: 'https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png'
    };

    return (
      <div className="App">
        <UserProfile user={ joao } />
        <UserProfile user={ amelia } />
      </div>
    );
  }
}

export default App;

// Analisando o código acima, temos:

// O componente App é composto por dois componentes UserProfile. Exemplificando, o componente App é pai dos dois componentes UserProfile. Além disso, <UserProfile user={joao} /> e <UserProfile user={amelia} /> são componentes irmãos, e os dois são filhos do componente App.

// O componente UserProfile, por sua vez, possui um componente Image, ou seja, UserProfile tem Image como filho.

// Os dados são repassados de componente pai para componente(s) filho(s). Olhando para o código acima, o componente App, que é pai dos dois componentes UserProfile, passa para cada um de seus filhos um objeto com as informações de um perfil. O mesmo pode ser dito olhando para UserProfile, que passa para seu componente filho Image a origem de uma imagem.

// Talvez você tenha reparado que todos os nomes de componentes React são iniciados com letra maiúscula. É uma simples, porém importante, regra de sintaxe do React.

// Essa norma de sintaxe se dá devido ao modo como o React diferencia tags do DOM dos componentes React: quando iniciados com letra minúscula, como <div /> e <input />, serão tratadas como tags do DOM. Por sua vez, quando iniciados com letra maiúscula, como <Greeting />, serão entendidos como componentes React.