import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";

class Promotion extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: null,
      zoomValue: new Animated.Value(1),
    };
  }

  handleImagePress = (index) => {
    const { activeIndex, zoomValue } = this.state;

    if (activeIndex === index) {
      Animated.timing(zoomValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start(() => {
        this.setState({ activeIndex: null });
      });
    } else {
      this.setState({ activeIndex: index }, () => {
        Animated.timing(zoomValue, {
          toValue: 1.1,
          duration: 300,
          useNativeDriver: false,
        }).start();
      });
    }
  };

  render() {
    const { activeIndex, zoomValue } = this.state;

    return (
      <ScrollView contentContainerStyle={styles.container}>
        {foodItems.map((item, index) => (
          <View>
            <TouchableOpacity
              key={index}
              onPress={() => this.handleImagePress(index)}
              activeOpacity={0.8}
            >
              <Animated.View
                style={[
                  styles.imageContainer,
                  activeIndex === index && {
                    transform: [{ scale: zoomValue }],
                    zIndex: 1,
                  },
                ]}
              >
                <Image source={item.image} style={styles.foodImage} />
              </Animated.View>
             
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 20, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderWidth: 1}}>
            <View style={styles.listFoodContent}>
                <Text style={styles.listFoodText1}>Món Chính</Text>
                <Image
                  source={require("../../../assets/right_arrow_icon.png")}
                  style={styles.welComeMainItem}
                />
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  imageContainer: {
    width: 150,
    height: 150,
    margin: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    overflow: "hidden", // Đảm bảo hình ảnh không tràn ra ngoài khung
    borderTopStartRadius: 10,
    borderTopEndRadius: 10, // Bo tròn góc của khung
    shadowColor: "#000", // Màu đổ bóng
    shadowOffset: { width: 0, height: 2 }, // Độ dịch của đổ bóng
    shadowOpacity: 0.8, // Độ trong suốt của đổ bóng
    shadowRadius: 4, // Bán kính của đổ bóng
    elevation: 5, // Độ cao của đổ bóng trên Android
  },
  foodImage: {
    width: "100%", // Đảm bảo hình ảnh lấp đầy khung
    height: "100%",
  },
  listFoodContent: {
    flex: 1,
    flexDirection: "row",
  },
  welComeMainItem: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
});

const foodItems = [
  { image: require("../../../assets/Burger-Shrimp.jpg") },
  { image: require("../../../assets/COM.jpg") },
  // { image: require('./images/food3.jpg') },
  // Thêm các món ăn khác vào đây với các hình ảnh tương ứng
];

export default Promotion;
