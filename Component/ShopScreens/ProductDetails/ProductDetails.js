import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Header from "../../HeaderScreen/Header";
import { styles } from "./StylesProductDetails";
import Promotion from "../PromotionScreens/Promotion";
import { getIdMockApi } from "../../../Services/FoodDetails/authentication";

const ProductDetails = ({ navigation, route }) => {
  // const [Price, setPrice] = useState()
  const [count, setCount] = useState(1);
  const ItemId = route.params?.ItemId;
  const [task, setTask] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    imagedata: "",
  });

  const getId = async (id) => {
    try {
      const { data } = await getIdMockApi(id);
      // console.log(data);
      setTask(data);
    } catch (err) {
      alert(err.response);
    }
  };

  useEffect(() => {
    getId(ItemId);
  }, [ItemId]);

  const handleComeBack = () => {
    navigation.goBack();
  };

  const handleLess = () => {
    if (count >= 2) {
      setCount(count - 1);
    }
  };

  const handleMore = () => {
    if (count >= 10) {
      alert("Bạn chỉ có thể đặt tối đa là 10");
    } else {
      setCount(count + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.containerChild}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={handleComeBack}>
              <Image
                source={require("../../../assets/arrow_left_icon.png")}
                style={{
                  width: 25,
                  height: 25,
                  marginLeft: 10,
                  marginRight: 80,
                }}
              />
            </TouchableOpacity>
            <Text style={{ fontWeight: "700" }}>{task?.name}</Text>
          </View>
          <View
            style={{ borderWidth: 0.4, borderColor: "#ccc", marginTop: 10 }}
          />
          <View style={{ alignItems: "center" }}>
            <Image
              source={{ uri: task?.imagedata }}
              style={{ width: 180, height: 150 }}
            />
          </View>
          <View
            style={{ borderWidth: 0.4, borderColor: "#ccc", marginTop: 20 }}
          />
          {/* m2 */}
          <View style={{ height: 150, marginHorizontal: 20 }}>
            <View
              style={{ flexDirection: "row", marginBottom: 30, marginTop: 20 }}
            >
              <Text
                numberOfLines={2}
                style={{
                  fontWeight: "700",
                  fontSize: 20,
                  flexWrap: "wrap",
                  flex: 2,
                }}
              >
                {task?.name}
              </Text>
              <Text
                numberOfLines={2}
                style={{
                  fontWeight: "700",
                  fontSize: 15,
                  marginLeft: 10,
                  flex: 1,
                }}
              >
                {task?.price}
              </Text>
            </View>
            <Text>{task?.description}</Text>
          </View>
          <View
            style={{ borderWidth: 0.4, borderColor: "#ccc", marginTop: 20 }}
          />

          {/* h5 */}
          <View style={{ height: 100, marginHorizontal: 20 }}>
            <View style={{ marginTop: 70 }}>
              <Text style={{ fontWeight: "700", fontSize: 25 }}>
                MÓN CỦA BẠN
              </Text>
            </View>
          </View>
          <View
            style={{
              borderWidth: 0.4,
              borderColor: "#ccc",
              marginTop: 20,
              marginHorizontal: 20,
            }}
          />
          {/* h6 */}
          <View style={{ marginTop: 25, height: 200, marginHorizontal: 20 }}>
            <View style={{ flexDirection: "row" }}>
              <View>
                <Text style={{ fontSize: 15, fontWeight: "700" }}>
                  BẠN MUỐN BAO NHIÊU?
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginLeft: 60 }}>
                <TouchableOpacity onPress={handleLess}>
                  <Image
                    source={require("../../../assets/less_minus_icon.png")}
                    style={{ width: 35, height: 35 }}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    marginHorizontal: 5,
                    textAlign: "center",
                    marginTop: 5,
                  }}
                >
                  {count}
                </Text>
                <TouchableOpacity onPress={handleMore}>
                  <Image
                    source={require("../../../assets/more_icon.png")}
                    style={{ width: 35, height: 35 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              style={{
                marginTop: 30,
                backgroundColor: "#e4002b",
                borderRadius: 25,
                width: 320,
                height: 50,
              }}
              onPress={() => {
                navigation.navigate("Promotion", { ItemId: task?.id, count: count});
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  marginTop: 15,
                  color: "white",
                  fontWeight: "600",
                }}
              >
                Thêm vào giỏ ({parseFloat(task?.price) * count}.000đ)
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetails;

//  {/* h3 */}
//  <View style={{ height: 150, marginHorizontal: 20 }}>
//  <View
//    style={{ flexDirection: "row", marginBottom: 30, marginTop: 60 }}
//  >
//    <Image
//      source={require("../../../assets/COM.jpg")}
//      style={{
//        width: 60,
//        height: 60,
//      }}
//    />
//    <View style={{ marginLeft: 5, flex: 2 }}>
//      <Text
//        numberOfLines={2}
//        style={{
//          fontWeight: "700",
//          fontSize: 15,
//          flexWrap: "wrap",
//          marginBottom: 20,
//        }}
//      >
//        2 FRIED CHICKEN
//      </Text>
//      <Text>Gà Rán (2 miếng)</Text>
//    </View>
//    {/* <View style={{ flexDirection: "row", marginLeft: 60, flex: 1 }}>
//      <Text
//        style={{
//          fontWeight: "700",
//          // marginLeft: 10,
//        }}
//      >
//        Thay đổi
//      </Text>
//      <Image
//        source={require("../../../assets/right_arrow_icon.png")}
//        style={{
//          width: 20,
//          height: 20,
//        }}
//      />
//    </View> */}
//  </View>
//  {/* <Text>02 Miếng Gà Rán + 1 lon Pepsi</Text> */}
// </View>
// <View
//  style={{ borderWidth: 0.4, borderColor: "#ccc", marginTop: 20 }}
// />
// {/* h4 */}
// <View style={{ height: 150, marginHorizontal: 20 }}>
//  <View
//    style={{ flexDirection: "row", marginBottom: 30, marginTop: 60 }}
//  >
//    <Image
//      source={require("../../../assets/pepsi-zero.jpg")}
//      style={{
//        width: 60,
//        height: 60,
//      }}
//    />
//    <View style={{ marginLeft: 5, flex: 2 }}>
//      <Text
//        numberOfLines={2}
//        style={{
//          fontWeight: "700",
//          fontSize: 15,
//          flexWrap: "wrap",
//          marginBottom: 20,
//        }}
//      >
//        DRINK
//      </Text>
//      <Text>{task?.maUngVien}</Text>
//    </View>
//    <View style={{ flexDirection: "row", marginLeft: 60, flex: 1 }}>
//      <Text
//        style={{
//          fontWeight: "700",
//          // marginLeft: 10,
//        }}
//      >
//        Thay đổi
//      </Text>
//      <Image
//        source={require("../../../assets/right_arrow_icon.png")}
//        style={{
//          width: 20,
//          height: 20,
//        }}
//      />
//    </View>
//  </View>
// </View>
// <View
//  style={{ borderWidth: 0.4, borderColor: "#ccc", marginTop: 20 }}
// />
// {/* h5 */}
// <View style={{ height: 150, marginHorizontal: 20 }}>
//  <View style={{ marginTop: 40 }}>
//    <Text style={{ fontWeight: "700", fontSize: 25 }}>
//      MÓN CỦA BẠN
//    </Text>
//    <View style={{ flexDirection: "row", marginVertical: 20 }}>
//      <Text>2 Fried Chicken:</Text>
//      <Text style={{ fontWeight: "600" }}>Gà Rán (2 miếng)</Text>
//    </View>
//    <View style={{ flexDirection: "row" }}>
//      <Text>Nước:</Text>
//      <Text style={{ fontWeight: "600" }}>Pepsi Lon</Text>
//    </View>
//  </View>
// </View>
// <View
//  style={{ borderWidth: 0.4, borderColor: "#ccc", marginTop: 20, marginHorizontal: 20 }}
// />
