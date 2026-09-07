import { useParams } from "react-router-native";
import { useGetRepositoriesById } from "../hooks/useQuery";
import { Text } from "react-native";

import RepositoryItem from "./RepositoryItem";

const SingleRepositoryView = () => {
  const { id } = useParams();
  const { data, error, loading } = useGetRepositoriesById(id);
  if (loading) return <Text>Loading</Text>;
  if (error) return <Text>{error.message}</Text>;
  return <RepositoryItem item={data.repository} single={true} />;
};

export default SingleRepositoryView;
