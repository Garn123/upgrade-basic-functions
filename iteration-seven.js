const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

const findName = (list, name) => {
    list.forEach(element => {
      if(name === element){
        console.log("Se ha encontrado " + name)
      }
    });
}

findName(nameFinder, "Peggy");