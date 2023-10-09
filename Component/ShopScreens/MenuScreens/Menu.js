import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import Header from "../../HeaderScreen/Header";
import { styles } from "./StylesMenu";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();
import Home from "../HomeScreens/Home";
import Card from "../CardScreens/Card";
import Promotion from "../PromotionScreens/Promotion";
import { TopTabs } from "../Shop";
export default function Menu() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <View style={styles.bodySearch}>
          <TouchableOpacity>
            <Image
              source={require("../../../assets/search_strong_icon.png")}
              style={{ width: 20, height: 20, marginLeft: 10 }}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Tìm kiếm món ăn"
            onChangeText={(name) => setName(name)}
          />
        </View>
      </View>
      <TopTabs />
    </View>
  );
}
