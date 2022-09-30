// O componente Route

// Route é o componente fundamental em React Router, que estabelece o mapeamento entre o caminho de URL declarado com o componente.Tal mapeamento, no que diz respeito à correspondência entre o caminho da URL atual e a presente no componente, pode ser feito das seguintes formas, ilustradas pelos seguintes exemplos:

// O caminho da URL atual do navegador começa com o caminho / about, declarado na prop path no componente Route.Dessa forma, se o caminho da URL for /about, o componente About será renderizado:

<Route path="/about" component={About} />

// Entretanto, se a URL atual for /about/me, por exemplo, também existirá correspondência, e o componente About continuará sendo renderizado.Nesse caso, o parâmetro exact pode entrar em ação:

{/* <Route exact path="/about" component={About} /> */}

// Se houver uma correspondência exata entre o caminho da URL atual e o caminho / about declarado em Route, o componente será renderizado.Por outro lado, se o caminho da URL atual for /about/me, não haverá correspondência exata, logo o componente About não será renderizado.

// Outra maneira de renderização de componente com Route é fazendo uso do elemento children.Ou seja, se o seu código estiver assim: <Route path="/about" component={About} />, você também poderá fazer da seguinte forma:

  <Route path="/about" >
    <About />
  </Route>