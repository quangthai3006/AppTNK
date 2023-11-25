import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Registration from "./Component/RegistrationScreen/Registration"
import { NavigationContainer } from '@react-navigation/native';
import Shop from "./Component/RegistrationScreen/LoginScreen/ShopScreens/Shop";
import Login from "./Component/RegistrationScreen/LoginScreen/Login";
import ProductDetails from "./Component/RegistrationScreen/LoginScreen/ShopScreens/ProductDetails/ProductDetails";
const StackNavigator = createStackNavigator(
  {

    Registration: {
      screen: Registration,
      navigationOptions: {
        headerShown: false, // Ẩn tiêu đề trên màn hình
      },
    },

    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false, // Ẩn tiêu đề trên màn hình
      },
    },

    Shop: {
      screen: Shop,
      navigationOptions: {
        headerShown: false, // Ẩn tiêu đề trên màn hình
      },
    },

    ProductDetails: {
      screen: ProductDetails,
      navigationOptions: {
        headerShown: false, // Ẩn tiêu đề trên màn hình
      },
    },

    
  },

  {
    initialRouteName: "Registration",
  }
);

export default createAppContainer(StackNavigator);
