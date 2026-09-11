import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { useOrdering } from "../contexts/OrderingContext";
import { Searchbar } from "react-native-paper";

import theme from "../theme";

const SearchBar = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const { setOrdering } = useOrdering();
  const [value] = useDebounce(searchKeyword, 500);

  // execute just if value changes
  useEffect(() => {
    setOrdering((prev) => ({
      ...prev,
      searchKeyword: value,
    }));
  }, [value, setOrdering]);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchKeyword}
      value={searchKeyword}
      style={theme.searchBar}
    />
  );
};

export default SearchBar;
