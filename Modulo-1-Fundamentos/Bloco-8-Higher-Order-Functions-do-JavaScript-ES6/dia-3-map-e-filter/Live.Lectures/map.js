// FUNÇÃO map

// O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

//Retornar todos os nomes presentes no array

const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false }
]


const names = users.map((pessoa) => pessoa.firstName);
console.log(names);//[ 'Homer', 'Marge', 'Bart', 'Lisa', 'Maggie' ]

// Usando templates literal
const names2 = users.map((pessoa) => `Nomes: ${pessoa.firstName} ${pessoa.lastName}`);
console.log(names2);[
                     'Nomes: Homer Simpson',
                     'Nomes: Marge Simpson',
                     'Nomes: Bart Simpson',
                     'Nomes: Lisa Simpson',
                     'Nomes: Maggie Simpson'
                    ]

// Como retornar nome e sobrenome apenas das pessoas que não dirigem?

// Encadeamento de HOFs

const birds = [
  { ID: 'DV8', Name: 'Eurasian Collared-Dove', Type: 'Dove' },
  { ID: 'HK12', Name: 'Bald Eagle', Type: 'Hawk' },
  { ID: 'HK6', Name: 'Red-Tailed Hawk', Type: 'Hawk' },
  { ID: 'SP11', Name: 'Old World Sparrow', Type: 'Sparrow' },
  { ID: 'DV2', Name: 'Mourning Dove', Type: 'Dove' },
];