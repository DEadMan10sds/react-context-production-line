import { createContext } from "react";

class Operation {
  counter = 0;
  constructor(operationName) {
    this.name = operationName;
  }

  addCounter() {
    return ++this.counter;
  }

  reduceCounter() {
    return --this.counter;
  }

  setCounter(newCounter) {
    this.counter = newCounter;
  }
}

export const OperationContext = createContext(new Operation("10"));
