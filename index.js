'use strict'


class Stack {
  constructor() {
    this.storage = {}
    this.size = 0;
  }

  push(element) {
    this.size++
    this.storage[this.size] = element;
  }

  pop() {
  let removed = this.storage[this.size]
  delete this.storage[this.size]
  this.size--
  return removed
  }

  peek()  {
    return this.storage[this.size]
  }
}

const stack = new Stack();

stack.push('dog')
stack.push('cat')
stack.push('bear')
stack.pop()
// console.log(stack.peek())

//Queue's
//enqueue
//dequeue

// const queue = []

// queue.push('a')
// queue.push('b')
// queue.push('c')

// console.log(queue.shift())
// console.log(queue)

class Queue {
  constructor() {
    this.storage = {}
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element) {
    this.storage[this.tail] = element
    this.tail++
  }

  dequeue() {
    let removed = this.storage[this.head]
    delete this.storage[this.head]
    this.head++ 
    return removed
  }
}

const queue = new Queue();

queue.enqueue('a')
queue.enqueue('b')
queue.enqueue('c')
queue.dequeue()
console.log(queue)