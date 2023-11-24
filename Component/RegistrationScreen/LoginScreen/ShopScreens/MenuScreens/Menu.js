import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import Header from "../../../../HeaderScreen/Header";
import { styles } from "./StylesMenu";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();
import Home from "../HomeScreens/Home";
import Card from "../CardScreens/Card";
import Promotion from "../PromotionScreens/Promotion";
import { TopTabs } from "../Shop";
export default function Menu() {
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState()
  const [data, setData] = useState([])
  // const getTaskData = async () => {
  //   setIsLoading(true);
  //   try {
  //     const listTasksResponse = await listApi();
  //     if (listTasksResponse && listTasksResponse.data) {
  //       const { data } = listTasksResponse;
  //       // console.log(data);
  //       setData(data.items);
  //     } else {
  //       console.error("API response is invalid:", listTasksResponse);
  //     }
  //   } catch (err) {
  //     const errorMessage = err.response.data;
  //     alert(errorMessage);
  //   }
  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   getTaskData();
  // }, []);

  return (
    <View style={styles.container}>
      <Header />
     
      <TopTabs />
      
    </View>
  );
}

{/* <View style={styles.body}>
<View style={styles.bodySearch}>
  <TouchableOpacity onPress={() => {handleSearch(data, search)}}>
    <Image
      source={require("../../../assets/search_strong_icon.png")}
      style={{ width: 20, height: 20, marginLeft: 10 }}
    />
  </TouchableOpacity>
  <TextInput
    placeholder="Tìm kiếm món ăn"
    onChangeText={(search) => setSearch(search)}
  />
</View>
</View> */}
