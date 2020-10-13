class Stack {
  constructor() {
    this.stacks = [];
  }
  
  push(el) {
    this.stacks.push(el);
  }
  
  peek() {
    this.stacks.pop();
  }
  
  isEmpty() {
    return this.stacks.length === 0;
  }
  
  clear() {
   this.stacks = [];
  }
}

class Queue {
  constructor() {
    this.queues = [];
  }
  
  enqueue(el) {
   this.queues.push(el);
  }
  
  dequeue(el) {
    this.queues.shift();
  }
  
  size() {
    return this.queues.length;
  }
  
  isEmpty() {
    return this.queues.length === 0;
  }
}

class PQ {
  constructor() {
    this.queues = [];
  }
  
  enqueue(el , priority) {
    if(this.isEmpty()) {
      return this.queues.push([el , priority]);
    } 
    this.queues = this.queues.reverse();
    const index = this.queues.findIndex(el => {
      return priority >= el[1];
    });
    if(index === -1) {
      this.queues.push([el, priority]);
    } else {
      this.queues = this.queues.splice(index , 0 , [el , priority]);
    }
    this.queues = this.queues.reverse();
  }
  
  dequeue(priority) {
    
  }
  
  size() {
    return this.queues.length;
  }
  
  isEmpty()  {
    return this.size() > 0 ? false : true;
  }
}

let pq = new PQ();
pq.enqueue(['animal', 3]);
pq.enqueue(['mammal', 1])

console.log(pq);