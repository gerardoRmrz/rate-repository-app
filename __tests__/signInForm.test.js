import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react-native";

import SignInFormContainer from "../src/components/SignInFormContainer";

describe("SignIn", () => {
  describe("SignInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      const onSubmit = jest.fn();
      await render(<SignInFormContainer onSubmit={onSubmit} />);

      await fireEvent.changeText(
        screen.getByPlaceholderText("username"),
        "kalle",
      );
      await fireEvent.changeText(
        screen.getByPlaceholderText("password"),
        "password",
      );
      await fireEvent.press(screen.getByText("Submit"));

      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument

        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit).toHaveBeenCalledWith(
          {
            username: "kalle",
            password: "password",
          },
          expect.any(Object),
        );
      });
    });
  });
});
