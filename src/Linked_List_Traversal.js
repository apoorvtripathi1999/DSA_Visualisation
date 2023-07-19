// Import visualization libraries
const {
  Array1DTracer,
  Layout,
  LogTracer,
  Tracer,
  VerticalLayout
} = require("algorithm-visualizer");

// Define tracer variables
const array1dTracer = new Array1DTracer("Linked List");
const logTracer = new LogTracer("Console");

// Define the linked list node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Define the linked list traversal function
function traverseLinkedList(head) {
  let current = head;
  let index = 0;
  while (current !== null) {
    const value = current.value;

    // Visualize the traversal
    array1dTracer.patch(index, value);
    logTracer.println(`Visiting node with value: ${value}`);
    Tracer.delay();

    current = current.next;
    index++;

    // Visualize the movement
    array1dTracer.depatch(index - 1);
    Tracer.delay();
  }
}

(function main() {
  // Create a sample linked list
  const head = new Node(1);
  const second = new Node(2);
  const third = new Node(3);
  const fourth = new Node(4);
  const fifth = new Node(5);

  head.next = second;
  second.next = third;
  third.next = fourth;
  fourth.next = fifth;

  // Visualize the linked list
  Layout.setRoot(new VerticalLayout([array1dTracer, logTracer]));
  array1dTracer.set([1, 2, 3, 4, 5]);
  Tracer.delay();

  // Traverse the linked list and visualize the process
  traverseLinkedList(head);
})();
