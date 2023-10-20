import React, { useState } from "react";
import { TouchableOpacity, View, Image, Text, ScrollView } from "react-native";
import { styles } from "./StylesCard";
import Header from "../../HeaderScreen/Header";
import Menu from "../MenuScreens/Menu";
const Card = ({ navigation }) => {

  const handleOrder = () => {
    navigation.navigate("Menu")
  }
  function exampleFunction(...args) {
    // Biến args sẽ là một mảng chứa tất cả các đối số truyền vào hàm
    // args có thể chứa bất kỳ số lượng đối số nào, bao gồm cả đối tượng và số
    
    // Ví dụ:
    console.log(args);
  }
  
  // Sử dụng hàm với các đối số khác nhau, bao gồm đối tượng và số
  const myObject = { name: "John", age: 30 };
  const myNumber = 42;
  
  exampleFunction(myObject, myNumber, "Hello");
  
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        {/* <View style={styles.containerChild}> */}
          {/* <View style={styles.header}>
            <Text style={styles.headerContent}>GIỎ HÀNG CỦA TÔI</Text>
          </View> */}

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
        {/* </View> */}
      </ScrollView>
    </View>
  );
};

export default Card;
