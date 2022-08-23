let person = {
  firstName: 'Joana',
  lastName: 'Pereira',
  age: 27,
  canDrive: true,
  favoriteMovies: ['Star Wars', 'Matrix'],
  favoriteAlbuns: ['Skank'],
};

// DOT NOTATION (notação por ponto)
person.firstName = 'Rods';
person.city = 'São Paulo';

// console.log(person.age);
// console.log(person.canDrive);
// console.log(person.lastName);
// console.log(person.favoriteMovies);

// BRACKET NOTATION (notação por colchetes)
person['lastName'] = 'Rosa';
person['address'] = {
  street: 'Rua XYZ',
  number: 46,
}

// console.log(person['age']);
// console.log(person['canDrive']);

// console.log(person.address);
// console.log(person['address']['number']);

delete person.city;

// console.log(person);

for (let key in person) {
  console.log(person[key]);
}