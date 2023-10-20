import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import {
  listFoodItemApi,
  listApi,
  getAllMockApi,
} from "../../../../Services/FoodDetails/authentication";
import { styles } from "./StylesBurger";
import ProductDetails from "../../ProductDetails/ProductDetails";

export default function Burger({ navigation }) {
  const [isTym, setTym] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [task, setData] = useState([]);
  const [search, setSearch] = useState();

  const getTaskData = async () => {
    setIsLoading(true);
    try {
      const listTasksResponse = await getAllMockApi();
      if (listTasksResponse && listTasksResponse.data) {
        const { data } = listTasksResponse;
        // console.log(data);
        setData(data);
      } else {
        console.error("API response is invalid:", listTasksResponse);
      }
    } catch (err) {
      const errorMessage = err.response.data;
      alert(errorMessage);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getTaskData();
  }, []);

  const renderTask = ({ item }) => {
    if (item.category === "Burger") {
      return (
        <TouchableOpacity
          style={{ marginBottom: 15 }}
          //   onPress={() => {
          //     navigation.navigate("DetailTaskScreen", { taskId: item.id });
          //   }}
        >
          <View style={styles.content}>
            <View style={styles.contentImage}>
              <TouchableOpacity>
                <Image
                  source={{ uri: item.imagedata }}
                  style={{ width: 90, height: 90 }}
                />
              </TouchableOpacity>
              <View style={styles.containerChild}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 15, fontWeight: "700" }}>
                    {item.name}
                  </Text>
                  <TouchableOpacity onPress={handleClickTym}>
                    {isTym ? (
                      <Image
                        source={require("../../../../assets/like_color_icon.png")}
                        style={{ width: 25, height: 25, marginLeft: 20 }}
                      />
                    ) : (
                      <Image
                        source={require("../../../../assets/like_notification_icon.png")}
                        style={{ width: 25, height: 25, marginLeft: 20 }}
                      />
                    )}
                  </TouchableOpacity>
                </View>
                <Text style={{ fontWeight: "700", marginVertical: 6 }}>
                  {item.price}
                </Text>
                <Text>{item.description}</Text>
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

  const handleClickTym = () => {
    setTym(!isTym);
  };

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
                source={require("../../../../assets/search_strong_icon.png")}
                style={{ width: 20, height: 20, marginLeft: 10 }}
              />
            </TouchableOpacity>
            <TextInput
              placeholder="Tìm kiếm món ăn"
              onChangeText={(search) => setSearch(search)}
            />
          </View>
        </View>
        <View style={styles.header}>
          <Text style={styles.headerContent}>BURGER - CƠM - MÌ Ý</Text>
        </View>

        <FlatList
          onRefresh={getTaskData}
          refreshing={isLoading}
          // style={styles}
          data={task}
          renderItem={renderTask}
        />
      </View>
      </ScrollView>
    </View>
  );
}
