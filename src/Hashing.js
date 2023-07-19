// Import visualization libraries
const {
  Array2DTracer,
  Layout,
  LogTracer,
  Tracer,
  VerticalLayout
} = require("algorithm-visualizer");

// Define tracer variables
const array2dTracer = new Array2DTracer("Hash Table");
const logTracer = new LogTracer("Console");

// Define input variables
const tableSize = 10; // Size of the hash table
const values = [12, 25, 38, 42, 55, 68, 80, 93, 106]; // Values to be inserted

// Hash function
function hash(value) {
  return value % tableSize; // Simple modulus operation
}

// Hash Table class
class HashTable {
  constructor(size) {
    this.size = size;
    this.table = Array.from({ length: size }, () => []);
  }

  insert(value) {
    const index = hash(value);
    this.table[index].push(value);
    this.visualizeInsert();
  }

  visualizeInsert() {
    array2dTracer.set(this.table);
    Tracer.delay();
  }
}

(function main() {
  // Visualize the hash table and log
  Layout.setRoot(new VerticalLayout([array2dTracer, logTracer]));
  array2dTracer.set(Array.from({ length: tableSize }, () => []));
  Tracer.delay();

  const hashTable = new HashTable(tableSize);

  for (const value of values) {
    hashTable.insert(value);
    logTracer.println(`Inserted value: ${value}`);
  }
})();
