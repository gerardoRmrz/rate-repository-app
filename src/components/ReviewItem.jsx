import { Text, View } from "react-native";
import { format } from "date-fns";

import theme from "../theme";

const ReviewItem = ({ review }) => {
  return (
    <View style={theme.itemContainer}>
      <View style={theme.singleViewHeading}>
        <View style={theme.singleViewRating}>
          <Text style={theme.singleViewTextRating}>{review.rating}</Text>
        </View>
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

export default ReviewItem;
