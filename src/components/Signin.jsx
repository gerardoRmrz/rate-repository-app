import { useFormik } from "formik";
import { Text, TextInput, StyleSheet, Pressable } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import theme from "../theme";

const initialValues = {
  userName: "",
  password: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const SignInForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          id="userName"
          name="userName"
          type="text"
          placeholder="username"
          onChange={formik.handleChange}
          value={formik.values.userName}
        />
        <TextInput
          style={styles.input}
          id="password"
          name="password"
          type="text"
          placeholder="password"
          secureTextEntry
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <Pressable
          onPress={() => onSubmit(formik.values)}
          style={styles.button}
        >
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
  button: {
    padding: 10,
    margin: 12,
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
  },
});
