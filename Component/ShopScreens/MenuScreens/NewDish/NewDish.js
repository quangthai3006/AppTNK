import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { styles } from "./StylesNewDish";
import { listFoodItemApi, listApi} from "../../../../Services/FoodDetails/authentication";

export default function NewDish() {
  const [isTym, setTym] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [task, setData] = useState([]);

  const getTaskData = async () => {
    setIsLoading(true);
    try {
      const listTasksResponse = await listApi();
      if (listTasksResponse && listTasksResponse.data) {
        const { data } = listTasksResponse;
        console.log(data);
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
    // if(item.diaChi === "55")
    // {

      return (
        // <TouchableOpacity
        //   // style={styles.listItem}
        //   onPress={() => {
        //     navigation.navigate("DetailTaskScreen", { taskId: item.id });
        //   }}
        // >
  
        <View style={styles.content}>
          <View style={styles.contentImage}>
            <TouchableOpacity>
              <Image
                source={require("../../../../assets/pepsi-zero.jpg")}
                style={{ width: 90, height: 90 }}
              />
            </TouchableOpacity>
            <View style={styles.containerChild}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 15, fontWeight: "700" }}>
                  {item.name}
                </Text>
                <TouchableOpacity value={isTym} onPress={handleClickTym}>
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
                {item.diaChi}
              </Text>
              <Text>{item.email}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.contentButton}>
            <Text style={styles.contentButtonText}>Thêm</Text>
          </TouchableOpacity>
        </View>
        // </TouchableOpacity>
      );
    // }
  };

  const handleClickTym = () => {
    setTym(!isTym);
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerChild}>
        <View style={styles.header}>
          <Text style={styles.headerContent}>MÓN MỚI</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.contentImage}>
            <TouchableOpacity>
              <Image
                source={require("../../../../assets/pepsi-zero.jpg")}
                style={{ width: 90, height: 90 }}
              />
            </TouchableOpacity>
            <View style={styles.containerChild}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 15, fontWeight: "700" }}>
                  Pepsi Không Calo Lon
                </Text>
                <TouchableOpacity value={isTym} onPress={handleClickTym}>
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
                17.000đ
              </Text>
              <Text>Pepsi Không Calo Lon</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.contentButton}>
            <Text style={styles.contentButtonText}>Thêm</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          onRefresh={getTaskData}
          refreshing={isLoading}
          // style={styles}
          data={task}
          renderItem={renderTask}
        />
      </View>
    </View>
  );
}

//  <View style={styles.content}>
// <View style={styles.contentImage}>
//   <TouchableOpacity>
//     <Image
//       source={require("../../../../assets/pepsi-zero.jpg")}
//       style={{ width: 90, height: 90 }}
//     />
//   </TouchableOpacity>
//   <View style={styles.containerChild}>
//     <View style={{ flexDirection: "row" }}>
//       <Text style={{ fontSize: 15, fontWeight: "700" }}>
//         Pepsi Không Calo Lon
//       </Text>
//       <TouchableOpacity value={isTym} onPress={handleClickTym}>
//        {isTym ?  <Image
//           source={require("../../../../assets/like_color_icon.png")}
//           style={{ width: 25, height: 25, marginLeft: 20 }}
//         /> :  <Image
//           source={require("../../../../assets/like_notification_icon.png")}
//           style={{ width: 25, height: 25, marginLeft: 20 }}
//         />}
//       </TouchableOpacity>
//     </View>
//     <Text style={{ fontWeight: "700", marginVertical: 6 }}>
//       17.000đ
//     </Text>
//     <Text>Pepsi Không Calo Lon</Text>
//   </View>
// </View>
// <TouchableOpacity style={styles.contentButton}>
//   <Text style={styles.contentButtonText}>Thêm</Text>
// </TouchableOpacity>
// </View>
