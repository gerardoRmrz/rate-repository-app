import { View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";
import theme from "../theme";

import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import SingleRepositoryView from "./SingleRepositoryView";
import SignIn from "./Signin";
import SignOut from "./SignOut";
import NewReviewForm from "./NewReviewForm";
import CreateUserForm from "./CreateUserForm";
import MyReviews from "./MyReviews";

const Main = () => {
  return (
    <View style={theme.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/sinlgeview/:id" element={<SingleRepositoryView />} />
        <Route path="/newreview" element={<NewReviewForm />} />
        <Route path="/myreviews" element={<MyReviews />}></Route>
        <Route path="/signup" element={<CreateUserForm />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
