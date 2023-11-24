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
import { ScrollView } from "react-native-virtualized-view";
import { styles } from "./StylesPromotion";
import ProductDetails from "../ProductDetails/ProductDetails";
import {
  listApi,
  PostFavoritedApi,
  DeleteFavoriteApi,
} from "../../../../../Services/FoodDetails/authentication";
import { getAccessUserId } from "../../../../../Services/RegisterLogin/authentication";

export default function Promotion({ navigation }) {
  // const [isLoading, setIsLoading] = useState(false);
  const [isTym, setTym] = useState(false);
  const [task, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [userId, setUserId] = useState("");

  const getTaskData = async (id) => {
    // setIsLoading(true);
    try {
      const listTasksResponse = await listApi(id);
      if (listTasksResponse && listTasksResponse.data) {
        const { data } = listTasksResponse;
        setData(data);
      } else {
        console.error("API response is invalid:", listTasksResponse);
      }
    } catch (err) {
      if (err.response) {
        const errorMessage = err.response.data;
        console.log(errorMessage)
      } else {
        console.error("An error occurred:", err);
      }
    }
    // setIsLoading(false);
  };

  useEffect(() => {
    getTaskData(userId);
  }, [userId]);

  useEffect(() => {
    const getUserId = async () => {
      try {
        const AccessUserId = await getAccessUserId();
        setUserId(AccessUserId);
      } catch (err) {
        console.error("Lỗi khi lấy dữ liệu:", err);
      }
    };
    getUserId();
  }, []);

  const handleClickTym = async (item) => {
    try {
      const updatedTask = task.map((cart) => {
        if (cart.id === item.id) {
          const isFavorite = !cart.isFavorite;
          if (isFavorite) {
            // console.log(userId)
            PostFavoritedApi({
              userId: userId,
              ItemId: item.id,
            }).catch((error) => {
              console.error("Lỗi khi gửi yêu cầu API:", error);
            });
          }
          else {
            DeleteFavoriteApi(userId, item.id).catch((error) => {
              console.error("Lỗi khi gửi yêu cầu API để xóa mục ưa thích:");
              console.error("Yêu cầu:", error.request); // Hiển thị yêu cầu
              console.error("Phản hồi:", error.response.errors); // Hiển thị phản hồi từ server (nếu có)
              console.error("Message:", error.message);
            });
          }
          return { ...cart, isFavorite };
        }
        return cart;
      });
      setData(updatedTask);
    } catch (err) {
      alert("Có lỗi xảy ra: " + err.message);
      console.error("Lỗi:", err);
    }
  };

  const renderTask = ({ item, userId }) => {
    if (item.category === "UuDai") {
      return (
        <TouchableOpacity
          style={{ marginBottom: 15, flex: 1 }}
          //   onPress={() => {
          //     navigation.navigate("DetailTaskScreen", { taskId: item.id });
          //   }}
        >
          <View style={styles.content}>
            <View style={styles.contentImage}>
              <TouchableOpacity>
                <Image
                  source={item?.imageUrl ? { uri: item?.imageUrl } : null}
                  style={{ width: 90, height: 90 }}
                />
              </TouchableOpacity>
              <View style={styles.containerChild}>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    numberOfLines={2}
                    style={{
                      fontSize: 15,
                      fontWeight: "700",
                      flexWrap: "wrap",
                      flex: 1,
                    }}
                  >
                    {item.name}
                  </Text>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => handleClickTym(item)}
                  >
                    {item.isFavorite ? (
                      <Image
                        source={require("../../../../../assets/like_color_icon.png")}
                        style={{ width: 25, height: 25, marginLeft: 20 }}
                      />
                    ) : (
                      <Image
                        source={require("../../../../../assets/like_notification_icon.png")}
                        style={{ width: 25, height: 25, marginLeft: 20 }}
                      />
                    )}
                  </TouchableOpacity>
                </View>
                <Text style={{ fontWeight: "700", marginVertical: 6 }}>
                  {item.price}.000đ
                </Text>
                <Text
                  numberOfLines={3}
                  ellipsizeMode="tail"
                  style={{
                    flexWrap: "wrap",
                    // flex: 1,
                  }}
                >
                  {item.description}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.contentButton}
              onPress={() => {
                navigation.navigate("ProductDetails", { ItemId: item.id });
              }}
            >
              <Text style={styles.contentButtonText}>Thêm</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      );
    }
  };

  // const handleClickTym = (item) => {
  //   try {
  //     const result = task.map((cart) => {
  //       if (cart.id === item.id) {
  //         setTym(!isTym);
  //         return { ...cart, isFavorite: !isTym };
  //       }
  //       return cart;
  //     });
  //     setData(result);

  //     const result1 = task.map(async (cart) => {
  //       if (cart.isFavorite === true) {
  //         const { data } = await PostFavoritedApi({
  //           userId: userId,
  //           ItemId: item.id,
  //         });
  //       }
  //     });
  //   } catch (err) {
  //     alert("Có lỗi xảy ra: " + err.message);
  //     console.error("Lỗi:", err);
  //   }
  // };

  const handleSearch = (task, search) => {
    const normalizedSearch = search.trim().toLowerCase();

    const results = task.filter((item) => {
      const normalizedItemName = item.name.trim().toLowerCase();
      return normalizedItemName.includes(normalizedSearch);
    });

    if (results.length > 0) {
      setData(results);
    } else {
      alert("Không tìm thấy kết quả.");
    }
  };
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.containerChild}>
          <View style={styles.body}>
            <View style={styles.bodySearch}>
              <TouchableOpacity
                onPress={() => {
                  handleSearch(task, search);
                }}
              >
                <Image
                  source={require("../../../../../assets/search_strong_icon.png")}
                  style={{ width: 20, height: 20, marginLeft: 10 }}
                />
              </TouchableOpacity>
              <TextInput
                value={search}
                placeholder="Tìm kiếm món ăn"
                onChangeText={(search) => setSearch(search)}
              />
            </View>
          </View>
          <View style={styles.header}>
            <Text style={styles.headerContent}>Khuyễn Mãi</Text>
          </View>

          <FlatList
            onRefresh={getTaskData}
            // refreshing={isLoading}
            keyExtractor={(item) => item.id.toString()}
            data={task}
            renderItem={renderTask}
          />
        </View>
      </ScrollView>
    </View>
  );
}
