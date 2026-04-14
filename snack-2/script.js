const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

const namesArray = people.map((person) => {
  return person.name // qui sto creando per ogni iterazione un oggetto che contine solo il campo nome dell'oggetto originale
});

console.log(namesArray);
