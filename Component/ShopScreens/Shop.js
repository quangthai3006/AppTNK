import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./HomeScreens/Home";
import Card from "./CardScreens/Card";
import Menu from "./MenuScreens/Menu";
import Promotion from "./PromotionScreens/Promotion";
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function Shop() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Menu" component={Menu} />
        <Tab.Screen name="Promotion" component={Promotion} />
        <Tab.Screen name="Card" component={Card} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Shop;
