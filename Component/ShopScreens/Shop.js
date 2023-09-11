import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image, Text, StyleSheet, StatusBar} from 'react-native';
import Home from "./HomeScreens/Home";
import Card from "./CardScreens/Card";
import Menu from "./MenuScreens/Menu";
import Promotion from "./PromotionScreens/Promotion";
import { NavigationContainer } from '@react-navigation/native';
import { Component } from 'react';

const Tab = createBottomTabNavigator();
StatusBar.setHidden(true)
class Shop extends Component {
  render() {
    return (
      <NavigationContainer >
        <Tab.Navigator >
          <Tab.Screen name="Home" component={Home} options={{
              headerShown: false,  //ẩn chữ trên cùng của màn hình 
              tabBarLabel: 'Home',
              tabBarIcon: ({ focused }) => (
                focused ? <Image 
                style={styles.image} 
                source={require('../../assets/home_icon.png')} 
                /> : <Image 
                style={ {height: 20,width: 20}} 
                source={require('../../assets/home_icon.png')} 
                />
              ),
            }} />
          <Tab.Screen name="Menu" component={Menu} options={{
              headerShown: false,
              tabBarLabel: 'Menu',
              tabBarIcon: ({ focused }) => (
                focused ? <Image 
                style={styles.image} 
                source={require('../../assets/Menu_icon.png')} 
                /> : <Image 
                style={ {height: 20,width: 20}} 
                source={require('../../assets/Menu_icon.png')} 
                />
              ),
            }} />
          <Tab.Screen name="Promotion" component={Promotion} options={{
              headerShown: false,
              tabBarLabel: 'Promotion',
              tabBarIcon: ({ focused }) => (
                focused ? <Image 
                style={styles.image} 
                source={require('../../assets/promotion_icon.png')} 
                /> : <Image 
                style={ {height: 20,width: 20}} 
                source={require('../../assets/promotion_icon.png')} 
                />
              ),
            }}  />
          <Tab.Screen name="Card" component={Card} options={{
              headerShown: false,
              tabBarLabel: 'Card',
              tabBarIcon: ({ focused }) => (
                focused ? <Image 
                style={styles.image} 
                source={require('../../assets/shopping_cart_icon.png')} 
                /> : <Image 
                style={ {height: 20,width: 20}} 
                source={require('../../assets/shopping_cart_icon.png')} 
                />
              ),
              tabBarBadge: 2, 
            }}  />
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
    backgroundColor: 'yellow',
  },

})

export default Shop;


