import { useParams } from "react-router-native";
import { useGetRepositoriesById } from "../hooks/useQuery";
import { Text, FlatList, View } from "react-native";

import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem";

import theme from "../theme";

const SingleRepositoryView = () => {
  const { id } = useParams();
  const { data, error, loading, fetchMore } = useGetRepositoriesById(id);

  const reviews = data?.repository.reviews.edges.map((item) => item.node);

  if (loading) return <Text>Loading</Text>;
  if (error) return <Text>{error.message}</Text>;

  const ItemSeparator = () => <View style={theme.separator} />;

  return (
    <FlatList
      data={reviews}
      onEndReached={fetchMore}
      onEndReachedThreshold={0.5}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <RepositoryItem item={data.repository} single={true} />
      )}
    />
  );
};

export default SingleRepositoryView;
