// import React, { Component } from "react";
// import {
//   View,
//   Text,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   Animated,
//   StyleSheet,
// } from "react-native";

// class Card extends Component {
//   constructor() {
//     super();
//     this.state = {
//       activeIndex: null,
//       zoomValue: new Animated.Value(1),
//     };
//   }

//   handleImagePress = (index) => {
//     const { activeIndex, zoomValue } = this.state;

//     if (activeIndex === index) {
//       // Nếu chạm vào ảnh đã phóng to, thu nhỏ nó
//       Animated.timing(zoomValue, {
//         toValue: 1,
//         duration: 300,
//         useNativeDriver: false,
//       }).start(() => {
//         this.setState({ activeIndex: null });
//       });
//     } else {
//       // Nếu chạm vào ảnh mới, phóng to nó
//       this.setState({ activeIndex: index }, () => {
//         Animated.timing(zoomValue, {
//           toValue: 1.1,
//           duration: 300,
//           useNativeDriver: false,
//         }).start();
//       });
//     }
//   };

//   render() {
//     const { activeIndex, zoomValue } = this.state;

//     return (
//       <ScrollView contentContainerStyle={styles.container}>
//         {foodItems.map((item, index) => (
//           <TouchableOpacity
//             key={index}
//             onPress={() => this.handleImagePress(index)}
//             activeOpacity={0.8}
//             style={{borderWidth: 1, borderColor: "#ccc", borderRadius: 6, height: 190, width: 180}}
//           >
//             <Animated.Image
//               source={item.image}
//               style={[
//                 styles.foodImage,
//                 activeIndex === index && {
//                   transform: [{ scale: zoomValue }],
//                   zIndex: 1,
//                 },
//               ]}
//             />
//             <View style={styles.listFoodContent}>
//               <Text style={styles.listFoodText1}>Món Chính</Text>
//               <Image
//                 source={require("../../../assets/right_arrow_icon.png")}
//                 style={styles.welComeMainItem}
//               />
//             </View>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "center",
//   },
//   foodImage: {
//     width: 150,
//     height: 150,
//     margin: 10,
//     // borderWidth: 1,
//     // borderColor: "#ccc",
//     // borderRadius: 6,
//   },
//   listFoodImage: {
//     flex: 2,
//     width: "50%",
//     height: 150,
//   },
//   listFoodContent: {
//     flex: 1,
//     flexDirection: "row",
//   },
//   welComeMainItem: {
//     width: 20,
//     height: 20,
//     marginLeft: 10,
//   },
//   listFoodText1: {
//     // color: "red",
//   },
// });

// const foodItems = [
//   { image: require("../../../assets/COM.jpg") },
//   { image: require("../../../assets/Burger-Shrimp.jpg") },
//   // { image: require("../../../assets/eye.png") },
//   // Thêm các món ăn khác vào đây với các hình ảnh tương ứng
// ];

// export default Card;
import React, { useState } from "react";
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";

const Card = ({ navigation }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handlePress = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <View onPress={handlePress} style={styles.container}>
        <View
          style={isZoomed ? styles.imageContainerZoomed : styles.imageContainer}
        >
          <Image
            source={require("../../../assets/Burger-Shrimp.jpg")}
            style={isZoomed ? styles.imageZoomed : styles.image}
          />
        </View>
        <View>
          <Text style={styles.foodName}>Món ăn mới</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/Burger-Shrimp.jpg")}
            style={styles.image}
          />
        </View>
        <View
          style={{
            width: 160,
            height: 40,
            backgroundColor: "white",
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderBottomWidth: 1,
            borderColor: "#ccc",
            overflow: "hidden", // Đảm bảo hình ảnh không tràn ra ngoài khung
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10, // Bo tròn góc của khung
            shadowColor: "#000", // Màu đổ bóng
            // shadowOffset: { width: 0, height: 2 }, // Độ dịch của đổ bóng
            shadowOpacity: 0.8, // Độ trong suốt của đổ bóng
            // // shadowRadius: 4, // Bán kính của đổ bóng
            elevation: 5,
            flexDirection: "row",
          }}
        >
          <Text style={styles.foodName}>Món ăn mới</Text>
          <Image
            source={require("../../../assets/right_arrow_icon.png")}
            style={styles.welComeMainItem}
          />
        </View>
      </TouchableOpacity>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  imageContainer: {
    width: 160,
    height: 130,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#ccc",
    overflow: "hidden", // Đảm bảo hình ảnh không tràn ra ngoài khung
    borderTopStartRadius: 10,
    borderTopEndRadius: 10, // Bo tròn góc của khung
    shadowColor: "#000", // Màu đổ bóng
    // shadowOffset: { width: 0, height: 2 }, // Độ dịch của đổ bóng
    shadowOpacity: 0.8, // Độ trong suốt của đổ bóng
    // // shadowRadius: 4, // Bán kính của đổ bóng
    // elevation: 5, // Độ cao của đổ bóng trên Android
  },
  imageContainerZoomed: {
    width: 190,
    height: 160,
    margin: 10,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#ccc",
    overflow: "hidden", // Đảm bảo hình ảnh không tràn ra ngoài khung
    borderTopStartRadius: 10,
    borderTopEndRadius: 10, // Bo tròn góc của khung
    shadowColor: "#000", // Màu đổ bóng
    // shadowOffset: { width: 0, height: 2 }, // Độ dịch của đổ bóng
    shadowOpacity: 0.8, // Độ trong suốt của đổ bóng
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  imageZoomed: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  foodName: {
    marginTop: 10,
    fontSize: 16,
  },
  listFoodContent: {
    // flex: 1,
    flexDirection: "row",
  },
  welComeMainItem: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginTop: 10,
  },
});

export default Card;
