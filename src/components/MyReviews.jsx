import { useQuery, useMutation } from "@apollo/client/react";
import { ME } from "../graphql/queries";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigate } from "react-router-native";

import { DELETE_REVIEW } from "../graphql/mutations";
import { GET_REPOSITORIES } from "../graphql/queries";

import ReviewItem from "./ReviewItem";
import theme from "../theme";

const MyReviews = () => {
  const navigate = useNavigate();
  const { data, error, loading } = useQuery(ME, {
    variables: { includeReviews: true },
  });

  const [deleteReview, result] = useMutation(DELETE_REVIEW, {
    refetchQueries: [ME],
    onCompleted: (data) => console.log(data),
    onError: (err) => console.log("Error: ", err.message),
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

  const handleView = (id) => {
    navigate(`/sinlgeview/${id}`);
  };

  const handleDelete = async (id) => {
    await deleteReview({
      variables: { deleteReviewId: id },
    });
  };

  const renderItem = (item) => (
    <View>
      <ReviewItem review={item} key={item.id} />
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={[theme.button, { flex: 0.5 }]}
          onPress={() => handleView(item.repository.id)}
        >
          <Text style={theme.smallButtonLabel}>View repository</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[theme.buttonDelete, { flex: 0.5 }]}
          onPress={() => handleDelete(item.id)}
        >
          <Text style={theme.smallButtonLabel}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => renderItem(item)}
      keyExtractor={({ id }) => id}
    />
  );
};

export default MyReviews;
