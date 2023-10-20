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
  GetAllCardMockApi,
  GetIdCardMockApi,
} from "../../../Services/FoodDetails/authentication";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProductDetails from "../ProductDetails/ProductDetails";
import { styles } from "./StylesPromotion";
import Header from "../../HeaderScreen/Header";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const Promotion = ({ navigation, route }) => {
  // const countGet = route.params?.count;
  // const ItemId = route.params?.ItemId;
  const [isTym, setTym] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [viewHeight, setViewHeight] = useState(200);
  // const [count, setCount] = useState()
  const [card, setCard] = useState([]);
  // const [item, setItem] = useState([]);
  // const [getIdCard, setGetId] = useState({
  //   // id: "",
  //   name: "",
  //   price: "",
  //   description: "",
  //   category: "",
  //   imagedata: "",
  // });

  const deleteTask = async (id) => {
    try {
      const { data } = await DeleteMockApi(id);
      alert("Xóa thành công!Vuốt màn hình để tải lại");
    } catch (err) {
      console.log(err.response);
      alert(err.response);
    }
  };

  const getAllCardMockApiVariable = async () => {
    setIsLoading(true);
    try {
      const { data } = await GetAllCardMockApi();
      setCard(data);

      
      const { data1 } = await GetIdCardMockApi(card[0]?.ItemId);
      setCard(data1);
      
    } catch (err) {
      console.log(err.response);
    }
    setIsLoading(false);
  };

  // const getId = async (id) => {
  //   try {
  //     const { data } = await GetIdCardMockApi(id);
  //     setCard(data);
  //   } catch (err) {
  //     alert(err.response);
  //   }
  // };

  useEffect(() => {
    getAllCardMockApiVariable();
  }, []);

  // useEffect(() => {
  //     getId(ItemId);
  // }, [ItemId]);

  const handleClickTym = () => {
    setTym(!isTym);
    setShowDescription(!showDescription);
    setViewHeight(!showDescription ? 250 : 200);
  };

  const handleLess = () => {
    if (card?.count >= 2) {
      setCard({ ...card, count: card?.count - 1 });
    }
  };

  const handleMore = () => {
    if (item.count >= 10) {
      alert("Bạn chỉ có thể đặt tối đa là 10");
    } else {
      setCard({ ...item, count: item.count + 1 });
    }
  };

  const handleOrder = () => {
    navigation.navigate("Menu");
  };

  const renderTask = ({ item }) => {
    return (
      <View style={[styles.content, { height: viewHeight }]}>
        <View style={styles.contentImage}>
          <TouchableOpacity>
            <Image
              source={
                item?.imagedata
                  ? { uri: item?.imagedata }
                  : require("../../../assets/Burger-Shrimp.jpg")
              }
              style={{ width: 90, height: 90 }}
            />
          </TouchableOpacity>
          <View style={styles.containerChild}>
            <View style={{ flexDirection: "row", marginBottom: 20 }}>
              <Text style={{ fontSize: 15, fontWeight: "700" }}>
                {item?.ItemId}
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
                <Text>{item?.description}</Text>
                {/* <Text>2 x Gà Giòn Cay</Text>
                <Text>Pepsi Lon</Text> */}
              </View>
            )}
            <View style={{ flexDirection: "row", marginTop: 25 }}>
              <TouchableOpacity style={{ marginRight: 10 }}>
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
                  deleteTask(item.id);
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
            <Text style={{ marginHorizontal: 5, fontSize: 23 }}>
              {item?.count}
            </Text>
            <TouchableOpacity onPress={handleMore}>
              <Image
                source={require("../../../assets/more_icon.png")}
                style={{ width: 35, height: 35 }}
              />
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 15, fontWeight: "600" }}>
            ({parseFloat(item?.price) * item?.count}.000đ)
          </Text>
        </View>
      </View>
    );
  };

  const countTotalPrices = () => {
    let totalItems = 0;
    for (const item of card) {
      totalItems += item.price;
    }
    return totalItems;
  };
  

  //   const FirstCard = () => {
  //     return (
  //       <ScrollView>
  //         <View
  //           style={{
  //             backgroundColor: "#f8f7f5",
  //             height: 600,
  //           }}
  //         >
  //           <Text
  //             style={{
  //               fontSize: 25,
  //               marginTop: 50,
  //               marginLeft: 25,
  //               marginRight: 50,
  //               fontWeight: "600",
  //             }}
  //           >
  //             GIỎ HÀNG CỦA BẠN ĐANG TRỐNG. HÃY ĐẶT MÓN NGAY
  //           </Text>
  //           <TouchableOpacity style={styles.orderButton} onPress={handleOrder}>
  //             <Text style={styles.orderButtonText}>Đặt hàng ngay</Text>
  //           </TouchableOpacity>
  //           <Image
  //             source={require("../../../assets/empty-cart.png")}
  //             style={styles.backgroundImage}
  //           />
  //         </View>
  //         {/* </View> */}
  //       </ScrollView>
  //     );
  //   };

  //   const LaterCard = () => {
  //     return (
  //       <View style={[styles.content, { height: viewHeight }]}>
  //         <View style={styles.contentImage}>
  //           <TouchableOpacity>
  //             <Image
  //               source={{ uri: task?.imagedata }}
  //               style={{ width: 90, height: 90 }}
  //             />
  //           </TouchableOpacity>
  //           <View style={styles.containerChild}>
  //             <View style={{ flexDirection: "row", marginBottom: 20 }}>
  //               <Text style={{ fontSize: 15, fontWeight: "700" }}>
  //                 {task?.name}
  //               </Text>
  //               <TouchableOpacity onPress={handleClickTym}>
  //                 {isTym ? (
  //                   <Image
  //                     source={require("../../../assets/len-icon.png")}
  //                     style={{ width: 25, height: 25, marginLeft: 6 }}
  //                   />
  //                 ) : (
  //                   <Image
  //                     source={require("../../../assets/down_icon.png")}
  //                     style={{ width: 25, height: 25, marginLeft: 6 }}
  //                   />
  //                 )}
  //               </TouchableOpacity>
  //             </View>
  //             {/* <Text style={{ fontWeight: "700", marginVertical: 6 }}>
  //  17.000đ
  // </Text> */}
  //             {showDescription && (
  //               <View>
  //                 <Text>{task?.description}</Text>
  //                 {/* <Text>2 x Gà Giòn Cay</Text>
  //    <Text>Pepsi Lon</Text> */}
  //               </View>
  //             )}
  //             <View style={{ flexDirection: "row", marginTop: 25 }}>
  //               <TouchableOpacity
  //                 style={{ marginRight: 10 }}
  //                 onPress={() => {
  //                   navigation.navigate("ProductDetails", {
  //                     ItemId: task?.id,
  //                     count: count,
  //                   });
  //                 }}
  //               >
  //                 <Text
  //                   style={{
  //                     textDecorationLine: "underline",
  //                     fontWeight: "600",
  //                   }}
  //                 >
  //                   Chỉnh sửa
  //                 </Text>
  //               </TouchableOpacity>
  //               <TouchableOpacity
  //                 onPress={() => {
  //                   deleteTask(task?.id);
  //                 }}
  //               >
  //                 <Text
  //                   style={{
  //                     textDecorationLine: "underline",
  //                     fontWeight: "600",
  //                   }}
  //                 >
  //                   Xóa
  //                 </Text>
  //               </TouchableOpacity>
  //             </View>
  //           </View>
  //         </View>

  //         <View
  //           style={{
  //             borderWidth: 1,
  //             borderColor: "#ccc",
  //             marginHorizontal: 15,
  //             marginTop: 30,
  //           }}
  //         />

  //         <View
  //           style={{
  //             flexDirection: "row",
  //             marginTop: 15,
  //             justifyContent: "space-between",
  //             marginHorizontal: 15,
  //           }}
  //         >
  //           <View style={{ flexDirection: "row" }}>
  //             <TouchableOpacity onPress={handleLess}>
  //               <Image
  //                 source={require("../../../assets/less_minus_icon.png")}
  //                 style={{ width: 35, height: 35 }}
  //               />
  //             </TouchableOpacity>
  //             <Text style={{ marginHorizontal: 5, fontSize: 23 }}>{count}</Text>
  //             <TouchableOpacity onPress={handleMore}>
  //               <Image
  //                 source={require("../../../assets/more_icon.png")}
  //                 style={{ width: 35, height: 35 }}
  //               />
  //             </TouchableOpacity>
  //           </View>
  //           <Text style={{ fontSize: 15, fontWeight: "600" }}>
  //             ({parseFloat(task?.price) * count}.000đ)
  //           </Text>
  //         </View>
  //       </View>
  //     );
  //   };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.containerChild}>
          <View style={styles.header}>
            <Text style={styles.headerContent}>GIỎ HÀNG CỦA TÔI</Text>
          </View>
          {/* <LaterCard /> */}
          {/* {ItemId ? <LaterCard /> : <FirstCard />} */}

          <FlatList
            onRefresh={getAllCardMockApiVariable}
            refreshing={isLoading}
            keyExtractor={(item) => item.id.toString()}
            data={card}
            renderItem={renderTask}
          />

          <View style={styles.footerCard}>
            <View style={{ marginHorizontal: 10, marginTop: 80 }}>
              <Text style={{ fontWeight: "700", fontSize: 35 }}> {card.length} MÓN</Text>
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: "#ccc",
                  marginVertical: 10,
                  marginTop: 10,
                }}
              />
              <View style={{ flexDirection: "row", marginVertical: 10 }}>
                <Text style={{ flex: 1 }}>Tổng đơn hàng</Text>
                <Text style={{ flex: 1 }}>195.000đ</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Text style={{ flex: 1, fontWeight: "700" }}>
                  Tổng thanh toán
                </Text>
                <Text style={{ flex: 1, fontWeight: "700" }}>{countTotalPrices()}</Text>
              </View>

              <TouchableOpacity
                style={{
                  marginTop: 40,
                  // marginHorizontal: 20,
                  backgroundColor: "#e4002b",
                  borderRadius: 25,
                  width: 300,
                  height: 50,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      marginTop: 15,
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    Thanh toán
                  </Text>
                  <Text
                    style={{
                      marginTop: 15,
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    205.000đ
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
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

{
  /* <ScrollView> */
}
{
  /* {getAll?.map((item, index) => (
  <View key={index} style={[styles.content, { height: viewHeight }]}>
    <View style={styles.contentImage}>
      <TouchableOpacity>
        <Image
          source={
            item?.imagedata
              ? { uri: item?.imagedata }
              : require("../../../assets/Burger-Shrimp.jpg")
          }
          style={{ width: 90, height: 90 }}
        />
      </TouchableOpacity>
      <View style={styles.containerChild}>
        <View style={{ flexDirection: "row", marginBottom: 20 }}>
          <Text style={{ fontSize: 15, fontWeight: "700" }}>
            {item?.ItemId}
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
</Text> */
}
//         {showDescription && (
//           <View>
//             <Text>{item?.description}</Text>
//             {/* <Text>2 x Gà Giòn Cay</Text>
//     <Text>Pepsi Lon</Text> */}
//           </View>
//         )}
//         <View style={{ flexDirection: "row", marginTop: 25 }}>
//           <TouchableOpacity style={{ marginRight: 10 }}>
//             <Text
//               style={{
//                 textDecorationLine: "underline",
//                 fontWeight: "600",
//               }}
//             >
//               Chỉnh sửa
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => {
//               deleteTask(item?.id);
//             }}
//           >
//             <Text
//               style={{
//                 textDecorationLine: "underline",
//                 fontWeight: "600",
//               }}
//             >
//               Xóa
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>

//     <View
//       style={{
//         borderWidth: 1,
//         borderColor: "#ccc",
//         marginHorizontal: 15,
//         marginTop: 30,
//       }}
//     />

//     <View
//       style={{
//         flexDirection: "row",
//         marginTop: 15,
//         justifyContent: "space-between",
//         marginHorizontal: 15,
//       }}
//     >
//       <View style={{ flexDirection: "row" }}>
//         <TouchableOpacity onPress={handleLess}>
//           <Image
//             source={require("../../../assets/less_minus_icon.png")}
//             style={{ width: 35, height: 35 }}
//           />
//         </TouchableOpacity>
//         <Text style={{ marginHorizontal: 5, fontSize: 23 }}>
//           {item?.count}
//         </Text>
//         <TouchableOpacity onPress={handleMore}>
//           <Image
//             source={require("../../../assets/more_icon.png")}
//             style={{ width: 35, height: 35 }}
//           />
//         </TouchableOpacity>
//       </View>
//       <Text style={{ fontSize: 15, fontWeight: "600" }}>
//         ({parseFloat(item?.price) * count}.000đ)
//       </Text>
//     </View>
//   </View>
// ))} */}
// </ScrollView>
