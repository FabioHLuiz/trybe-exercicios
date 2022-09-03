// Encadeamento de HOFs

const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false }
]

const nomDriversNames = users.filter((elemento) => elemento.isDriver === false)
  .map((elemento) => elemento.firstName);



  console.log(nomDriversNames);

  // Nesse caso acima a lógica é :

  // Peguei meu array (users) que será manipulado e nele eu quero fazer duas coisa .filter e .map.

  // Para o código não ficar confuso se você chamou o primeiro parametro de (elemento) o nome do segundo também tem quer ser (elemento).

  // Então o que aconteceu na HOF acima:

  // Dentro da (const nomDriversNames), eu terei um resultado filtardo com .filter e ainda como uma outra lógica executada dentro dele.

  // Dentro de (users) eu estou fazendo um filtro do valor e quero buscar apenas quem tem (isDriver) false, desse resultado eu já coloco um .map considerando esse mesmo valor onde eu quero apenas o primeiro nome .


  const birds = [
    { ID: 'DV8', Name: 'Eurasian Collared-Dove', Type: 'Dove' },
    { ID: 'HK12', Name: 'Bald Eagle', Type: 'Hawk' },
    { ID: 'HK6', Name: 'Red-Tailed Hawk', Type: 'Hawk' },
    { ID: 'SP11', Name: 'Old World Sparrow', Type: 'Sparrow' },
    { ID: 'DV2', Name: 'Mourning Dove', Type: 'Dove' },
  ];

  //retornar os nomes dos passaros.

  const nomes = birds.map((elemento) => elemento.Name.toLowerCase());
  //Então logo após o elemento que tras a minha string eu já coloco direto a função que vai manipular minha string no caso .toLowerCase().

  console.log(nomes);