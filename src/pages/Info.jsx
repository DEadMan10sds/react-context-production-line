import { useContext } from "react";
import { OperationContext } from "../context/OperationContext";

export const InfoPage = () => {
  const operation = useContext(OperationContext);
  return (
    <>
      <h2>This is the info page</h2>
      <h2>
        {operation.name} - {operation.counter}
      </h2>
    </>
  );
};
