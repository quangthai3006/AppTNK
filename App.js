import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Shop from "./Component/ShopScreens/Shop"
import Home from "./Component/ShopScreens/HomeScreens/Home";
import Card from "./Component/ShopScreens/CardScreens/Card";
import Menu from "./Component/ShopScreens/MenuScreens/Menu";
import Promotion from "./Component/ShopScreens/PromotionScreens/Promotion";

const StackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Card: {
      screen: Card,
    },
    Menu: {
      screen: Menu,
    },
    Promotion: {
      screen: Promotion,
    },
    Shop: {
      screen: Shop,
    },
  },

  {
    initialRouteName: "Shop",
  }
);

export default createAppContainer(StackNavigator);
