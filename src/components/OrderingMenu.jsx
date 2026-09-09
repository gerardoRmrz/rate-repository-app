import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useOrdering } from "../contexts/OrderingContext";

import theme from "../theme";

const OrderingMenu = () => {
  const { ordering, setOrdering } = useOrdering();
  return (
    <View style={theme.orderMenu}>
      <Picker
        selectedValue={JSON.stringify(ordering)}
        onValueChange={(value) => {
          setOrdering(JSON.parse(value));
        }}
        style={theme.orderMenuItem}
      >
        <Picker.Item label="Select an Item" enabled={false} />
        <Picker.Item
          label="Latest repositories"
          value={JSON.stringify({ type: "CREATED_AT", direction: "DESC" })}
        />
        <Picker.Item
          label="Highest rated repositories"
          value={JSON.stringify({ type: "RATING_AVERAGE", direction: "DESC" })}
        />
        <Picker.Item
          label="Lowest rated repositories"
          value={JSON.stringify({ type: "RATING_AVERAGE", direction: "ASC" })}
        />
      </Picker>
    </View>
  );
};

export default OrderingMenu;
