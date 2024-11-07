import { createContext } from "react";

class Operation {
  constructor(operationName) {
    this.name = operationName;
  }
}

export const OperationContext = createContext(new Operation());
