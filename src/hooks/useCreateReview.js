import { useMutation } from "@apollo/client/react";
import { CREATE_REVIEW } from "../graphql/mutations";
import { ME } from "../graphql/queries";
import { useNavigate } from "react-router-native";

export const useCreateReview = () => {
  const navigate = useNavigate();
  const [mutate, result] = useMutation(CREATE_REVIEW, {
    refetchQueries: [ME],
    onCompleted: (data) => {
      console.log("Review created successfully");
    },
    onError: (err) => {
      console.error("Review creation error : ", err.message);
    },
  });

  const createReview = async (review) => {
    console.log("<<<<<<<<<<<<< ", review);
    const newReview = { ...review, rating: Number(review.rating) };
    await mutate({ variables: { review: newReview } });
    navigate("/myreviews");
  };

  return [createReview, result];
};
