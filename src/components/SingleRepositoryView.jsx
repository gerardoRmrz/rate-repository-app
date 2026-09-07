import { useParams } from "react-router-native";
import { useGetRepositoriesById } from "../hooks/useQuery";
import { Text } from "react-native";
import { format } from "date-fns";

import theme from "../theme";
import RepositoryItem from "./RepositoryItem";
import { FlatList } from "react-native";
import { View } from "react-native";

const SingleRepositoryView = () => {
  const { id } = useParams();
  const { data, error, loading } = useGetRepositoriesById(id);

  const reviews = data?.repository.reviews.edges.map((item) => item.node);

  if (loading) return <Text>Loading</Text>;
  if (error) return <Text>{error.message}</Text>;

  const ReviewItem = ({ review }) => {
    return (
      <View style={theme.itemContainer}>
        <View style={theme.singleViewHeading}>
          <Text style={theme.singleViewRating}>{review.rating}</Text>
          <View>
            <Text style={theme.singleViewUserName}>{review.user.username}</Text>
            <Text>{format(review.createdAt, "dd MMM yyyy")}</Text>
          </View>
        </View>
        <View>
          <Text style={theme.singleViewTextReview}>{review.text}</Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <RepositoryItem item={data.repository} single={true} />
      )}
    />
  );
};

export default SingleRepositoryView;
