import { createContext, useContext, useState } from "react";

// 1. Create the context
export const OrderingContext = createContext();

// 2. Create custom hook

export const useOrdering = () => {
  const context = useContext(OrderingContext);
  return context;
};

// 3. create a provider component

export const OrderingProvider = ({ children }) => {
  const [ordering, setOrdering] = useState({
    type: "CREATED_AT",
    direction: "DESC",
  });

  return (
    <OrderingContext.Provider value={{ ordering, setOrdering }}>
      {children}
    </OrderingContext.Provider>
  );
};
