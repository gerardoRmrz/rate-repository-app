import { useMutation } from "@apollo/client/react";
import { CREATE_REVIEW } from "../graphql/mutations";

export const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW, {
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
  };

  return [createReview, result];
};
