import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Shop from "./Component/ShopScreens/Shop"
import { NavigationContainer } from '@react-navigation/native';

const StackNavigator = createStackNavigator(
  {

    Shop: {
      screen: Shop,
      navigationOptions: {
        headerShown: false, // Ẩn tiêu đề trên màn hình
      },
    },
    
  },

  {
    initialRouteName: "Shop",
  }
);

export default createAppContainer(StackNavigator);
