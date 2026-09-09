import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useOrdering } from "../contexts/OrderingContext";

const OrderingMenu = () => {
  const { ordering, setOrdering } = useOrdering();
  console.log(">>>>>>>>>> ", ordering);
  return (
    <View>
      <Picker
        selectedValue={ordering}
        onValueChange={(value) => setOrdering(value)}
      >
        <Picker.Item label="Latest repositories" value={"latest"} />
        <Picker.Item label="Highest rated repositories" value={"highest"} />
        <Picker.Item label="Lowest rated repositories" value={"lowest"} />
      </Picker>
    </View>
  );
};

export default OrderingMenu;
