const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

// Crear una tabla
db.run('CREATE TABLE usuarios (id INT, nombre TEXT)');

// Insertar datos en la tabla
db.run('INSERT INTO usuarios (id, nombre) VALUES (1, "John Doe")');
db.run('INSERT INTO usuarios (id, nombre) VALUES (2, "Jane Smith")');

class Foo {
  chars = [];
  async apiCall() {
    const res = await fetch(`https://rickandmortyapi.com/api/characters`)
    return res.json();

  }
  async getElements() {
    const characters = await this.apiCall();
    console.log(characters);
  }
}

const foo = new Foo();
const characters = foo.getElements().then((res) => {
  console.log('tarea realizada.');
});

