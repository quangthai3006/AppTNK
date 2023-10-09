import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Image, Text, StyleSheet, StatusBar } from "react-native";
import Home from "./HomeScreens/Home";
import Card from "./CardScreens/Card";
import Menu from "./MenuScreens/Menu";
import Promotion from "./PromotionScreens/Promotion";
import Registration from "../RegistrationScreen/Registration";
import NewDish from "./MenuScreens/NewDish/NewDish";
import { NavigationContainer } from "@react-navigation/native";
import { Component } from "react";

const Tab = createBottomTabNavigator();
const Tab1 = createMaterialTopTabNavigator();

StatusBar.setHidden(true);

export const TopTabs = () => {
  return (
    // <NavigationContainer>
      <Tab1.Navigator
        initialRouteName="NewDish"
        tabBarOptions={{
          scrollEnabled: true, // Cho phép cuộn tab nếu nó quá nhiều
        }}
        swipeEnabled={true} // Cho phép người dùng lướt giữa các tab
        tabBarPosition="top" // Đặt thanh điều hướng ở vị trí bên trên
      >
        <Tab1.Screen name="NewDish" component={NewDish} />
        <Tab1.Screen name="Card" component={Card} />
        <Tab1.Screen name="Promotion" component={Promotion} />
      </Tab1.Navigator>
    // </NavigationContainer>
  );
};
class Shop extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false, //ẩn chữ trên cùng của màn hình
              tabBarLabel: "Home",
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Image
                    style={styles.image}
                    source={require("../../assets/home_icon.png")}
                  />
                ) : (
                  <Image
                    style={{ height: 20, width: 20 }}
                    source={require("../../assets/home_icon.png")}
                  />
                ),
            }}
          />
          <Tab.Screen
            name="Menu"
            component={Menu}
            options={{
              headerShown: false,
              tabBarLabel: "Menu",
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Image
                    style={styles.image}
                    source={require("../../assets/Menu_icon.png")}
                  />
                ) : (
                  <Image
                    style={{ height: 20, width: 20 }}
                    source={require("../../assets/Menu_icon.png")}
                  />
                ),
            }}
          />
          <Tab.Screen
            name="Promotion"
            component={Promotion}
            options={{
              headerShown: false,
              tabBarLabel: "Promotion",
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Image
                    style={styles.image}
                    source={require("../../assets/promotion_icon.png")}
                  />
                ) : (
                  <Image
                    style={{ height: 20, width: 20 }}
                    source={require("../../assets/promotion_icon.png")}
                  />
                ),
            }}
          />
          <Tab.Screen
            name="Card"
            component={Card}
            options={{
              headerShown: false,
              tabBarLabel: "Card",
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Image
                    style={styles.image}
                    source={require("../../assets/shopping_cart_icon.png")}
                  />
                ) : (
                  <Image
                    style={{ height: 20, width: 20 }}
                    source={require("../../assets/shopping_cart_icon.png")}
                  />
                ),
              tabBarBadge: 2,
            }}
          />
          <Tab.Screen
            name="Registration"
            component={Registration}
            options={{
              headerShown: false,
              tabBarLabel: "Registration",
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Image
                    style={styles.image}
                    source={require("../../assets/shopping_cart_icon.png")}
                  />
                ) : (
                  <Image
                    style={{ height: 20, width: 20 }}
                    source={require("../../assets/shopping_cart_icon.png")}
                  />
                ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

// const Shop = (navigation) => {

// }

const styles = StyleSheet.create({
  image: {
    height: 20,
    width: 20,
    backgroundColor: "yellow",
  },
});

export default Shop;
