import { useQuery } from "@apollo/client/react";
import { ME } from "../graphql/queries";
import { View, Text, FlatList } from "react-native";

import theme from "../theme";

import ReviewItem from "./ReviewItem";

const MyReviews = () => {
  const { data, error, loading } = useQuery(ME, {
    variables: { includeReviews: true },
  });

  if (error)
    return (
      <View>
        <Text>{error.message}</Text>
      </View>
    );
  if (loading)
    return (
      <View>
        <Text>{loading}</Text>
      </View>
    );

  const reviews = data?.me?.reviews.edges.map((item) => {
    return { ...item.node, user: { username: item.node.repository.name } };
  });

  console.log("========>> ", reviews);

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} key={item.id} />}
      keyExtractor={({ id }) => id}
    />
  );
};

export default MyReviews;
