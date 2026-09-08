import { useCreateUser } from "../hooks/useCreateUser";
import { useFormik } from "formik";
import * as yup from "yup";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { useNavigate } from "react-router-native";

import theme from "../theme";

const initialValues = {
  username: "",
  password: "",
  passwordConfirmation: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("username is required"),
  password: yup.string().required("password is required"),
  confirmPassword: yup
    .string()
    .required("password confirmation is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const CreateUserForm = () => {
  const [createUser, result] = useCreateUser();
  const navigate = useNavigate();

  const onSubmit = async (newUser) => {
    const { confirmPassword, ...values } = newUser;
    console.log("Submitted: ", newUser);
    try {
      await createUser(values);
      navigate("/");
    } catch (error) {
      console.error("Signing up failed");
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
        style={
          formik.touched.username && formik.errors.username
            ? theme.error
            : theme.input
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

      {/*********************************************************************/}

      <TextInput
        style={
          formik.touched.password && formik.errors.password
            ? theme.error
            : theme.input
        }
        autoCapitalize="none"
        type="password"
        placeholder="password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        onBlur={formik.handleBlur("password")}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={theme.validationError}>{formik.errors.password}</Text>
      )}
      {/*********************************************************************/}

      <TextInput
        style={
          formik.touched.confirmPassword && formik.errors.confirmPassword
            ? theme.error
            : theme.input
        }
        autoCapitalize="none"
        type="confirmPassword"
        placeholder="confirmPassword"
        value={formik.values.confirmPassword}
        onChangeText={formik.handleChange("confirmPassword")}
        onBlur={formik.handleBlur("confirmPassword")}
      />
      {formik.touched.confirmPassword && formik.errors.confirmPassword && (
        <Text style={theme.validationError}>
          {formik.errors.confirmPassword}
        </Text>
      )}
      {/*===============================================================*/}
      <TouchableOpacity onPress={formik.handleSubmit} style={theme.button}>
        <Text style={theme.buttonLabel}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateUserForm;
