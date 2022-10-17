// Componentes renderizados

// Se houver vários componentes apresentando correspondência entre seu caminho de URL e o caminho atual da aplicação, todos os componentes apresentando correspondência serão renderizados.Ou seja, suponha que houvesse a seguinte lista de componentes do tipo Route:

<Route path="/about" component={ About } />
<Route path="/contact" component={ Contact } />
<Route path="/" component={ Home } />

// Se o caminho atual da URL da aplicação for /, todos esses componentes serão renderizados, haja vista que nenhuma rota faz correspondência exata entre o caminho da URL, definido via prop path. Assim, path="/" faz correspondência com qualquer caminho de URL.

// Agora, se o caminho atual da URL da aplicação for /contact, os componentes Contact e Home serão renderizados. Isso pode ser um problema, e uma forma de atacá-lo é organizar essas rotas via componente Switch, que você verá com mais detalhes em instantes. 😉

