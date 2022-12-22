// O componente BrowserRouter

// BrowserRouter é o componente que encapsula a sua aplicação, de forma a te possibilitar fazer uso de navegação.

// Você pode encapsular os componentes diretamente no App.js:

// ./src/App.js
import { BrowserRouter } from 'react-router-dom';
// ...
<BrowserRouter>
  <Home />
  <About />
</BrowserRouter>
// ...

// Outra forma é encapsulando o próprio componente < App />, no arquivo index.js.Assim, todos os componentes renderizados por App poderão fazer uso da navegação:

// ./src/index.js
import { BrowserRouter } from 'react-router-dom';
// ...
<BrowserRouter>
  <App />
</BrowserRouter>
// ...

// Em muitos casos não faz diferença onde você coloca o < BrowserRouter /> - se no App.js ou no index.js.Entretanto, se sua aplicação possui testes, é comum adicionar o < BrowserRouter /> no index.js para que sua aplicação possa ser testada de forma mais eficiente.Mas isso será melhor aprofundado quando formos estudar testes.