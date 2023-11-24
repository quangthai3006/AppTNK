import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  TextInput,
  FlatList,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import {
  GetAllCardApi,
  DeleteCardApi,
  PutCardApi,
} from "../../../../../Services/FoodDetails/authentication";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PutProductDetails from "../PutProductDetailsScreen/PutProductDetails";
import ProductDetails from "../ProductDetails/ProductDetails";
import getAccessUserId from "../../../../../Services/RegisterLogin/authentication";
import Header from "../../../../HeaderScreen/Header";
import { styles } from "./StylesCard";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const Card = ({ navigation, route }) => {
  const userId = route.params?.userId;
  const ItemId = route.params?.ItemId;
  const [isTym, setTym] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [viewHeight, setViewHeight] = useState(200);
  const [card, setCard] = useState([]);
  const isCartEmpty = card.length === 0;

  const deleteTask = async (itemId, userId) => {
    try {
      const { data } = await DeleteCardApi(userId, itemId);
      alert("Xóa thành công!");
      getAllCardMockApiVariable(userId);
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  // useEffect(() => {
  //   const getUserId = async () => {
  //     try {
  //       const AccessUserId = await getAccessUserId();
  //       setUserId(AccessUserId);
  //     } catch (err) {
  //       console.error("Lỗi khi lấy dữ liệu:", err);
  //     }
  //   };
  //   getUserId();
  // }, []);

  const getAllCardMockApiVariable = async (id) => {
    setIsLoading(true);
    try {
      const { data } = await GetAllCardApi(id);
      setCard(data);
    } catch (err) {
      alert(err.response);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getAllCardMockApiVariable(userId);
  }, [ItemId]);

  const handleClickTym = (item) => {
    setTym(!isTym);
    setShowDescription(!showDescription);
    setViewHeight(!showDescription ? 250 : 200);
  };


  const handleLess = async (item) => {
    if (item?.quantity >= 2) {
      try {
        const updatedCard = card.map((cardItem) => {
          if (cardItem.id === item.id) {
            return { ...cardItem, quantity: cardItem.quantity - 1 };
          }
          return cardItem;
        });
        setCard(updatedCard);

        // Make the PUT request with the updated card data
        const { data } = await PutCardApi({
          userId: userId,
          ItemId: ItemId,
          quantity: item?.quantity - 1, // Update the quantity in the request
        });
      } catch (err) {
        alert("Có lỗi xảy ra: " + err.message);
        console.error("Lỗi:", err);
      }
    }
  };
  
  const handleMore = async (item) => {
    if (item?.quantity >= 10) {
      alert("Bạn chỉ có thể đặt tối đa là 10");
    } else {
      try {
        // Increase the quantity of the item
        const updatedCard = card.map((cardItem) => {
          if (cardItem.id === item.id) {
            return { ...cardItem, quantity: cardItem.quantity + 1 };
          }
          return cardItem;
        });
  
        setCard(updatedCard);
  
        // Make the PUT request with the updated card data
        const { data } = await PutCardApi({
          userId: userId,
          ItemId: ItemId,
          quantity: item?.quantity + 1, // Update the quantity in the request
        });
      } catch (err) {
        alert("Có lỗi xảy ra: " + err.message);
        console.error("Lỗi:", err);
      }
    }
  };
  

  const handleOrder = () => {
    navigation.navigate("Menu");
  };

  const renderTask = ({ item }) => {
    return <DanhSachMucCuaBan item={item}  />;
  };

  const DanhSachMucCuaBan = React.memo(({ item, showDescription }) => {
    return (
      <View style={[styles.content, { height: viewHeight }]}>
        <View style={styles.contentImage}>
          <TouchableOpacity>
            <Image
              source={
                item?.imageUrl
                  ? { uri: item?.imageUrl }
                  : require("../../../../../assets/Burger-Shrimp.jpg")
              }
              style={{ width: 90, height: 90 }}
            />
          </TouchableOpacity>
          <View style={styles.containerChild}>
            <View style={{ flexDirection: "row", marginBottom: 20 }}>
              <Text style={{ fontSize: 15, fontWeight: "700" }}>
                {item?.name}
              </Text>
              <TouchableOpacity onPress={() => handleClickTym(item)}>
                {isTym ? (
                  <Image
                    source={require("../../../../../assets/len-icon.png")}
                    style={{ width: 25, height: 25, marginLeft: 6 }}
                  />
                ) : (
                  <Image
                    source={require("../../../../../assets/down_icon.png")}
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
              <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => {
                  navigation.navigate("PutProductDetails", {
                    ItemId: item?.id,
                    Quantity: item?.quantity,
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
                  deleteTask(item?.id, userId);
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
            <TouchableOpacity onPress={() => handleLess(item)}>
              <Image
                source={require("../../../../../assets/less_minus_icon.png")}
                style={{ width: 35, height: 35 }}
              />
            </TouchableOpacity>
            <Text style={{ marginHorizontal: 5, fontSize: 23 }}>
              {item?.quantity}
            </Text>
            <TouchableOpacity onPress={() => handleMore(item)}>
              <Image
                source={require("../../../../../assets/more_icon.png")}
                style={{ width: 35, height: 35 }}
              />
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 15, fontWeight: "600" }}>
            {parseFloat(item?.price) * item?.quantity}.000đ
          </Text>
        </View>
      </View>
    );
  });

  const handleTotal = card.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const formattedTotal = handleTotal.toLocaleString(); // Định dạng số thành chuỗi với dấu ngăn cách hàng nghìn

  const FirstCard = () => {
    return (
      <ScrollView>
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
            source={require("../../../../../assets/empty-cart.png")}
            style={styles.backgroundImage}
          />
        </View>
        {/* </View> */}
      </ScrollView>
    );
  };

  const FlatLists = () => {
    return (
      <FlatList
        onRefresh={getAllCardMockApiVariable}
        refreshing={isLoading}
        keyExtractor={(item, index) => index.toString()}
        data={card}
        renderItem={renderTask}
      />
    );
  };

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
          {/* {isCartEmpty ? <FirstCard /> : <FlatLists />} */}
          <FlatLists />
          {/* <FlatList
            onRefresh={getAllCardMockApiVariable}
            refreshing={isLoading}
            keyExtractor={(item) => item.id.toString()}
            data={card}
            renderItem={renderTask}
          /> */}

          <View style={styles.footerCard}>
            <View style={{ marginHorizontal: 10, marginTop: 80 }}>
              <Text style={{ fontWeight: "700", fontSize: 35 }}>
                {" "}
                {card.length} MÓN
              </Text>
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
                <Text style={{ flex: 1 }}>{formattedTotal}.000đ</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Text style={{ flex: 1, fontWeight: "700" }}>
                  Tổng thanh toán
                </Text>
                <Text style={{ flex: 1, fontWeight: "700" }}>
                  {formattedTotal}.000đ
                </Text>
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
                    {formattedTotal}.000đ
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

export default Card;

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
