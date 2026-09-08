import { StyleSheet } from "react-native";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import theme from "../theme";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  username: yup.string().required("User name is required"),
  password: yup.string().required("Password is required"),
});

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "red",
  },
  button: {
    padding: 15,
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    zIndex: 999,
  },
});

const SignInFormContainer = ({ onSubmit }) => {
  const initialValues = {
    username: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        style={
          formik.touched.username && formik.errors.username
            ? styles.error
            : styles.input
        }
        autoCapitalize="none"
        type="text"
        placeholder="username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
        onBlur={formik.handleBlur("username")}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={theme.validationError}>{formik.errors.username}</Text>
      )}
      <TextInput
        style={
          formik.touched.password && formik.errors.password
            ? styles.error
            : styles.input
        }
        autoCapitalize="none"
        type="text"
        placeholder="password"
        secureTextEntry
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        onBlur={formik.handleBlur("password")}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={theme.validationError}>{formik.errors.password}</Text>
      )}
      <TouchableOpacity onPress={formik.handleSubmit} style={theme.button}>
        <Text style={theme.buttonLabel}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInFormContainer;
