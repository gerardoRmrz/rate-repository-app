import { useGetAllRepositories } from "../hooks/useQuery";
import { createContext, useContext, useState, useMemo } from "react";
import { Text } from "react-native";
import theme from "../theme";
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
    searchKeyword: "",
  });

  const { data, fetchMore, loading, error } = useGetAllRepositories(ordering);

  // Using memoization to avoid infinite renders

  const value = useMemo(
    () => ({ ordering, setOrdering, data, fetchMore }),
    [ordering, data, fetchMore],
  );

  return (
    <OrderingContext.Provider value={value}>
      {loading ? <Text>Loading</Text> : null}
      {error ? (
        <Text style={theme.error}>{`Error : ${error.message}`}</Text>
      ) : null}
      {children}
    </OrderingContext.Provider>
  );
};
