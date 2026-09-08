import { useFormik } from "formik";
import * as yup from "yup";
import { TextInput, Text, View, TouchableOpacity } from "react-native";
import theme from "../theme";

import { useCreateReview } from "../hooks/useCreateReview";

const validationSchema = yup.object().shape({
  repositoryName: yup.string().required("Repository name is required"),
  ownerName: yup.string().required("Owner name is required"),
  rating: yup.number().required("Rating is required").min(0).max(100),
  text: yup.string(),
});

const initialValues = {
  repositoryName: "",
  ownerName: "",
  rating: undefined,
  text: "",
};

const NewReviewForm = () => {
  const [createNewReview, result] = useCreateReview();

  const onSubmit = async (values) => {
    console.log("Submitted: ", values);
    try {
      await createNewReview(values);
      console.log("===========> ", result);
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View>
      <TextInput
        placeholder="Repository owner name"
        style={
          formik.touched.ownerName && formik.errors.ownerName
            ? theme.error
            : theme.input
        }
        autoCapitalize="none"
        type="text"
        value={formik.values.ownerName}
        onChangeText={formik.handleChange("ownerName")}
        onBlur={formik.handleBlur("ownerName")}
      />
      {formik.touched.ownerName && formik.errors.ownerName && (
        <Text style={theme.validationError}>{formik.errors.ownerName}</Text>
      )}
      {/******************************************************************/}
      <TextInput
        placeholder="Repository name"
        style={
          formik.touched.ownerName && formik.errors.repositoryName
            ? theme.error
            : theme.input
        }
        autoCapitalize="none"
        type="text"
        value={formik.values.repositoryName}
        onChangeText={formik.handleChange("repositoryName")}
        onBlur={formik.handleBlur("repositoryName")}
      />
      {formik.touched.repositoryName && formik.errors.repositoryName && (
        <Text style={theme.validationError}>
          {formik.errors.repositoryName}
        </Text>
      )}
      {/******************************************************************/}
      <TextInput
        placeholder="Rating between 0 and 100"
        style={
          formik.touched.rating && formik.errors.rating
            ? theme.error
            : theme.input
        }
        autoCapitalize="none"
        type="number"
        value={formik.values.rating}
        onChangeText={formik.handleChange("rating")}
        onBlur={formik.handleBlur("rating")}
      />
      {formik.touched.rating && formik.errors.rating && (
        <Text style={theme.validationError}>{formik.errors.rating}</Text>
      )}
      {/******************************************************************/}
      <TextInput
        placeholder="Review"
        style={
          formik.touched.text && formik.errors.text ? theme.error : theme.input
        }
        autoCapitalize="none"
        type="text"
        value={formik.values.text}
        onChangeText={formik.handleChange("text")}
        onBlur={formik.handleBlur("text")}
        multiline={true}
        textAlignVertical={"top"}
      />
      {formik.touched.text && formik.errors.text && (
        <Text style={{ color: "red" }}>{formik.errors.text}</Text>
      )}
      {/******************************************************************/}
      <TouchableOpacity onPress={formik.handleSubmit} style={theme.button}>
        <Text style={theme.buttonLabel}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewReviewForm;
