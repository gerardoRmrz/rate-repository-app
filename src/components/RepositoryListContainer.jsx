import { FlatList, View, Pressable, Text } from "react-native";
import { useNavigate } from "react-router-native";
import RepositoryItem from "./RepositoryItem";
import OrderingMenu from "./OrderingMenu";
import SearchBar from "./SearchBar";
import theme from "../theme";

const ItemSeparator = () => <View style={theme.separator} />;

const RepositoryListContainer = ({ repositories }) => {
  const navigate = useNavigate();

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={
        <View style={{ backgroundColor: "lightgray" }}>
          <SearchBar />
          <OrderingMenu />
        </View>
      }
      renderItem={({ item }) => (
        <Pressable
          onPress={() => navigate(`/sinlgeview/${item.id}`)}
          style={({ pressed }) =>
            pressed ? theme.pressablePressed : theme.pressableNormal
          }
        >
          <RepositoryItem item={item} />
        </Pressable>
      )}
    ></FlatList>
  );
};

export default RepositoryListContainer;
