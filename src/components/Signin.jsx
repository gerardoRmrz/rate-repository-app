import * as yup from "yup";
import { useFormik } from "formik";
import {
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import AuthStorage from "../utils/authStorage";
import { useApolloClient } from "@apollo/client/react";
import { Navigate } from "react-router-native";

import theme from "../theme";
import useSignIn from "../hooks/useSignIn";

const userToken = new AuthStorage();

const validationSchema = yup.object().shape({
  username: yup.string().required("User name is required"),
  password: yup.string().required("Password is required"),
});

const initialValues = {
  username: "",
  password: "",
};

const SignInForm = () => {
  const [signIn, result] = useSignIn();
  const apolloClient = useApolloClient();

  const onSubmit = async (values) => {
    console.log("******====>>>> Submit");
    try {
      await signIn(values);
    } catch (e) {
      console.error(e);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  if (result.data) {
    userToken.setAccessToken(result.data?.authenticate?.accessToken);
    apolloClient.resetStore();
    return <Navigate to={"/"} replace />;
  } else {
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
          <Text style={{ color: "red" }}>{formik.errors.username}</Text>
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
          <Text style={{ color: "red" }}>{formik.errors.password}</Text>
        )}
        <TouchableOpacity onPress={formik.handleSubmit} style={styles.button}>
          <Text style={{ color: theme.colors.textLabel }}>Sign in</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default SignInForm;

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
