import * as yup from "yup";
import { useFormik } from "formik";
import { Text, TextInput, StyleSheet, Pressable } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import AuthStorage from "../utils/authStorage";
import { useApolloClient } from "@apollo/client/react";

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

  const onSubmit = async (credentials) => {
    try {
      await signIn(credentials);
      await userToken.setAccessToken(result.data?.authenticate?.accessToken);
      apolloClient.resetStore();
    } catch (e) {
      console.error(e);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={
            formik.touched.username && formik.errors.username
              ? styles.error
              : styles.input
          }
          id="username"
          name="username"
          type="text"
          placeholder="username"
          value={formik.values.username}
          onChange={formik.handleChange}
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
          id="password"
          name="password"
          type="text"
          placeholder="password"
          secureTextEntry
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur("password")}
        />
        {formik.touched.password && formik.errors.password && (
          <Text style={{ color: "red" }}>{formik.errors.password}</Text>
        )}
        <Pressable onPress={formik.handleSubmit} style={styles.button}>
          <Text style={{ color: theme.colors.textLabel }}>Sign in</Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
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
    padding: 10,
    margin: 12,
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
  },
});
