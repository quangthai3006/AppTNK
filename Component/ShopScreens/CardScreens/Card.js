import React, { useState } from "react";
import { TouchableOpacity, View, Image, Text, ScrollView } from "react-native";
import { styles } from "./StylesCard";
import Header from "../../HeaderScreen/Header";
import Menu from "../MenuScreens/Menu";
const Card = ({ navigation }) => {

  const handleOrder = () => {
    navigation.navigate("Menu")
  }
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.containerChild}>
          <View style={styles.header}>
            <Text style={styles.headerContent}>GIỎ HÀNG CỦA TÔI</Text>
          </View>

          <View
            style={{
              backgroundColor: "#f8f7f5",
              height: 600,
            }}
          >
            <Text
              style={{
                fontSize: 25,
                marginTop: 50,
                marginLeft: 25,
                marginRight: 50,
                fontWeight: "600",
              }}
            >
              GIỎ HÀNG CỦA BẠN ĐANG TRỐNG. HÃY ĐẶT MÓN NGAY
            </Text>
            <TouchableOpacity style={styles.orderButton} onPress={handleOrder}>
              <Text style={styles.orderButtonText}>Đặt hàng ngay</Text>
            </TouchableOpacity>
            <Image
              source={require("../../../assets/empty-cart.png")}
              style={styles.backgroundImage}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Card;
