import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import {
  getIdMockApi,
  DeleteMockApi,
} from "../../../Services/FoodDetails/authentication";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProductDetails from "../ProductDetails/ProductDetails";
import { styles } from "./StylesPromotion";
import Header from "../../HeaderScreen/Header";

const Promotion = ({ navigation, route }) => {
  const countGet = route.params?.count;
  const ItemId = route.params?.ItemId;
  const [isTym, setTym] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [viewHeight, setViewHeight] = useState(200);
  const [count, setCount] = useState(countGet);

  const [task, setTask] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    imagedata: "",
  });

  const deleteTask = async (id) => {
    try {
      const { data } = await DeleteMockApi(id);
      alert("Xóa thành công!Vuốt màn hình để tải lại");
    } catch (err) {
      console.log(err.response);
      alert(err.response);
    }
  };
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

  const handleClickTym = () => {
    setTym(!isTym);
    setShowDescription(!showDescription);
    setViewHeight(!showDescription ? 250 : 200);
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

  // const renderTask = ({ item }) => {
  //   return (
  //     <View style={[styles.content, { height: viewHeight }]}>
  //       <View style={styles.contentImage}>
  //         <TouchableOpacity>
  //           <Image
  //             source={{ uri: item.imagedata }}
  //             style={{ width: 90, height: 90 }}
  //           />
  //         </TouchableOpacity>
  //         <View style={styles.containerChild}>
  //           <View style={{ flexDirection: "row", marginBottom: 20 }}>
  //             <Text style={{ fontSize: 15, fontWeight: "700" }}>
  //               {item.name}
  //             </Text>
  //             <TouchableOpacity onPress={handleClickTym}>
  //               {isTym ? (
  //                 <Image
  //                   source={require("../../../assets/len-icon.png")}
  //                   style={{ width: 25, height: 25, marginLeft: 6 }}
  //                 />
  //               ) : (
  //                 <Image
  //                   source={require("../../../assets/down_icon.png")}
  //                   style={{ width: 25, height: 25, marginLeft: 6 }}
  //                 />
  //               )}
  //             </TouchableOpacity>
  //           </View>
  //           {/* <Text style={{ fontWeight: "700", marginVertical: 6 }}>
  //           17.000đ
  //         </Text> */}
  //           {showDescription && (
  //             <View>
  //               <Text>{item?.description}</Text>
  //               {/* <Text>2 x Gà Giòn Cay</Text>
  //             <Text>Pepsi Lon</Text> */}
  //             </View>
  //           )}
  //           <View style={{ flexDirection: "row", marginTop: 25 }}>
  //             <TouchableOpacity
  //               style={{ marginRight: 10 }}
  //               onPress={() => {
  //                 navigation.navigate("ProductDetails", {
  //                   ItemId: item?.id,
  //                   count: count,
  //                 });
  //               }}
  //             >
  //               <Text
  //                 style={{
  //                   textDecorationLine: "underline",
  //                   fontWeight: "600",
  //                 }}
  //               >
  //                 Chỉnh sửa
  //               </Text>
  //             </TouchableOpacity>
  //             <TouchableOpacity
  //               onPress={() => {
  //                 deleteTask(item?.id);
  //               }}
  //             >
  //               <Text
  //                 style={{
  //                   textDecorationLine: "underline",
  //                   fontWeight: "600",
  //                 }}
  //               >
  //                 Xóa
  //               </Text>
  //             </TouchableOpacity>
  //           </View>
  //         </View>
  //       </View>

  //       <View
  //         style={{
  //           borderWidth: 1,
  //           borderColor: "#ccc",
  //           marginHorizontal: 15,
  //           marginTop: 30,
  //         }}
  //       />

  //       <View
  //         style={{
  //           flexDirection: "row",
  //           marginTop: 15,
  //           justifyContent: "space-between",
  //           marginHorizontal: 15,
  //         }}
  //       >
  //         <View style={{ flexDirection: "row" }}>
  //           <TouchableOpacity onPress={handleLess}>
  //             <Image
  //               source={require("../../../assets/less_minus_icon.png")}
  //               style={{ width: 35, height: 35 }}
  //             />
  //           </TouchableOpacity>
  //           <Text style={{ marginHorizontal: 5, fontSize: 23 }}>{count}</Text>
  //           <TouchableOpacity onPress={handleMore}>
  //             <Image
  //               source={require("../../../assets/more_icon.png")}
  //               style={{ width: 35, height: 35 }}
  //             />
  //           </TouchableOpacity>
  //         </View>
  //         <Text style={{ fontSize: 15, fontWeight: "600" }}>
  //           ({parseFloat(item?.price) * count}.000đ)
  //         </Text>
  //       </View>
  //     </View>
  //   );
  // };

  return (
    <View style={styles.container}>
      <Header />
      {/* <ScrollView> */}
      <View style={styles.containerChild}>
        <View style={styles.header}>
          <Text style={styles.headerContent}>GIỎ HÀNG CỦA TÔI</Text>
        </View>
        {/* <View style={styles.content}> */}
        <View style={[styles.content, { height: viewHeight }]}>
          <View style={styles.contentImage}>
            <TouchableOpacity>
              <Image
                source={{ uri: task?.imagedata }}
                style={{ width: 90, height: 90 }}
              />
            </TouchableOpacity>
            <View style={styles.containerChild}>
              <View style={{ flexDirection: "row", marginBottom: 20 }}>
                <Text style={{ fontSize: 15, fontWeight: "700" }}>
                  {task?.name}
                </Text>
                <TouchableOpacity onPress={handleClickTym}>
                  {isTym ? (
                    <Image
                      source={require("../../../assets/len-icon.png")}
                      style={{ width: 25, height: 25, marginLeft: 6 }}
                    />
                  ) : (
                    <Image
                      source={require("../../../assets/down_icon.png")}
                      style={{ width: 25, height: 25, marginLeft: 6 }}
                    />
                  )}
                </TouchableOpacity>
              </View>
              {/* <Text style={{ fontWeight: "700", marginVertical: 6 }}>
       17.000đ
     </Text> */}
              {showDescription && (
                <View>
                  <Text>{task?.description}</Text>
                  {/* <Text>2 x Gà Giòn Cay</Text>
         <Text>Pepsi Lon</Text> */}
                </View>
              )}
              <View style={{ flexDirection: "row", marginTop: 25 }}>
                <TouchableOpacity
                  style={{ marginRight: 10 }}
                  onPress={() => {
                    navigation.navigate("ProductDetails", {
                      ItemId: task?.id,
                      count: count,
                    });
                  }}
                >
                  <Text
                    style={{
                      textDecorationLine: "underline",
                      fontWeight: "600",
                    }}
                  >
                    Chỉnh sửa
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    deleteTask(task?.id);
                  }}
                >
                  <Text
                    style={{
                      textDecorationLine: "underline",
                      fontWeight: "600",
                    }}
                  >
                    Xóa
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              marginHorizontal: 15,
              marginTop: 30,
            }}
          />

          <View
            style={{
              flexDirection: "row",
              marginTop: 15,
              justifyContent: "space-between",
              marginHorizontal: 15,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={handleLess}>
                <Image
                  source={require("../../../assets/less_minus_icon.png")}
                  style={{ width: 35, height: 35 }}
                />
              </TouchableOpacity>
              <Text style={{ marginHorizontal: 5, fontSize: 23 }}>{count}</Text>
              <TouchableOpacity onPress={handleMore}>
                <Image
                  source={require("../../../assets/more_icon.png")}
                  style={{ width: 35, height: 35 }}
                />
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 15, fontWeight: "600" }}>
              ({parseFloat(task?.price) * count}.000đ)
            </Text>
          </View>
        </View>
        {/* <FlatList
          onRefresh={getId}
          refreshing={true}
          // style={styles}
          data={task}
          renderItem={renderTask}
        /> */}
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default Promotion;

//  {/* <View style={styles.content}> */}
//  <View style={[styles.content, { height: viewHeight }]}>
//  <View style={styles.contentImage}>
//    <TouchableOpacity>
//      <Image
//        source={{ uri: task?.imagedata }}
//        style={{ width: 90, height: 90 }}
//      />
//    </TouchableOpacity>
//    <View style={styles.containerChild}>
//      <View style={{ flexDirection: "row", marginBottom: 20 }}>
//        <Text style={{ fontSize: 15, fontWeight: "700" }}>
//          {task?.name}
//        </Text>
//        <TouchableOpacity onPress={handleClickTym}>
//          {isTym ? (
//            <Image
//              source={require("../../../assets/len-icon.png")}
//              style={{ width: 25, height: 25, marginLeft: 6 }}
//            />
//          ) : (
//            <Image
//              source={require("../../../assets/down_icon.png")}
//              style={{ width: 25, height: 25, marginLeft: 6 }}
//            />
//          )}
//        </TouchableOpacity>
//      </View>
//      {/* <Text style={{ fontWeight: "700", marginVertical: 6 }}>
//        17.000đ
//      </Text> */}
//      {showDescription && (
//        <View>
//          <Text>{task?.description}</Text>
//          {/* <Text>2 x Gà Giòn Cay</Text>
//          <Text>Pepsi Lon</Text> */}
//        </View>
//      )}
//      <View style={{ flexDirection: "row", marginTop: 25 }}>
//        <TouchableOpacity style={{ marginRight: 10 }} onPress={() => {
//      navigation.navigate("ProductDetails", { ItemId: task?.id, count: count});
//    }}>
//          <Text
//            style={{
//              textDecorationLine: "underline",
//              fontWeight: "600",
//            }}
//          >
//            Chỉnh sửa
//          </Text>
//        </TouchableOpacity>
//        <TouchableOpacity onPress={() => {deleteTask(task?.id)}}>
//          <Text
//            style={{
//              textDecorationLine: "underline",
//              fontWeight: "600",
//            }}
//          >
//            Xóa
//          </Text>
//        </TouchableOpacity>
//      </View>
//    </View>
//  </View>

//  <View
//    style={{
//      borderWidth: 1,
//      borderColor: "#ccc",
//      marginHorizontal: 15,
//      marginTop: 30,
//    }}
//  />

//  <View
//    style={{
//      flexDirection: "row",
//      marginTop: 15,
//      justifyContent: "space-between",
//      marginHorizontal: 15,
//    }}
//  >
//    <View style={{ flexDirection: "row" }}>
//      <TouchableOpacity onPress={handleLess}>
//        <Image
//          source={require("../../../assets/less_minus_icon.png")}
//          style={{ width: 35, height: 35 }}
//        />
//      </TouchableOpacity>
//      <Text style={{ marginHorizontal: 5, fontSize: 23 }}>
//        {count}
//      </Text>
//      <TouchableOpacity onPress={handleMore}>
//        <Image
//          source={require("../../../assets/more_icon.png")}
//          style={{ width: 35, height: 35 }}
//        />
//      </TouchableOpacity>
//    </View>
//    <Text style={{ fontSize: 15, fontWeight: "600" }}>
//      ({parseFloat(task?.price) * count}.000đ)
//    </Text>
//  </View>
// </View>
