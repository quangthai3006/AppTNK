import { useState } from "react";
import Swiper from "react-native-swiper";

import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const images = [
  "https://static.kfcvietnam.com.vn/images/category/lg/COM.jpg?v=gbw2Z3",
  "https://static.kfcvietnam.com.vn/images/category/lg/TRANG MIENG.jpg?v=gbw2Z3",
  "https://static.kfcvietnam.com.vn/images/items/lg/duasori-d.jpg?v=gbw2Z3",
];
const Home = ({ navigation }) => {
  return (
    // Header
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../assets/TNK1.png")}
          style={styles.logoTNK}
        />
        <TouchableOpacity>
          <Image
            source={require("../../../assets/menu_navigation_icon.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
      </View>

      {/* Contact */}
      <ScrollView>
        <View style={styles.contact}>
          {/* featuredItems */}
          <View style={styles.featuredItems}>
            <View style={styles.headerBlack}>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuItemText}>Đặt ngay</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuItem}>
                <Image
                  source={require("../../../assets/giao-hàng.png")}
                  style={styles.menuItemImage}
                />
                <Text style={styles.menuItemText}>Giao hàng</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuItem}>
                <Image
                  source={require("../../../assets/bag_shopping_icon.png")}
                  style={styles.menuItemImage}
                />
                <Text style={styles.menuItemText}>Mang đi</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity style={styles.orderButton}>
                <Text style={styles.orderButtonText}>Đặt hàng ngay</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <View style={styles.welCome}>
              <Image
                source={require("../../../assets/person_account_icon.png")}
                style={styles.welComeItem}
              />
              <View style={styles.welComeMain}>
                <Text style={styles.welComeMainText}>CHÀO MỪNG TRỞ LẠI</Text>
                <View style={styles.welComeMainClick}>
                  <TouchableOpacity>
                    <Text style={styles.welComeMainText2}>
                      Tài khoản của tôi
                    </Text>
                  </TouchableOpacity>
                  <Image
                    source={require("../../../assets//arrow_right_icon.png")}
                    style={styles.welComeMainItem}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* AnhAuto */}
        <View>
          <Swiper
            style={styles.wrapper}
            showsButtons={true} // Hiển thị nút Trái/Phải
            autoplay={true} // Tự động chuyển đổi ảnh
          >
            {images.map((imageUrl, index) => (
              <View key={index} style={styles.slide}>
                <Image source={{ uri: imageUrl }} style={styles.image} />
              </View>
            ))}
          </Swiper>
        </View>

        {/* list food */}
        <View style={styles.listFood}>
          <View style={styles.listFoodTitle}>
            <Text style={styles.listFoodText}>DANH MỤC MÓN ĂN</Text>
            <View style={styles.listFoodSoc}></View>
          </View>
          <View style={styles.list}>
            <View style={styles.listFoodContentFather}>
              <View>
                <Image
                  source={require("../../../assets/COM.jpg")}
                  style={styles.listFoodImage}
                />
              </View>
              <TouchableOpacity style={styles.listFoodTouchableOpacity}>
                <View style={styles.listFoodContent}>
                  <Text style={styles.listFoodText1}>Món Chính</Text>
                  <Image
                    source={require("../../../assets/right_arrow_icon.png")}
                    style={styles.welComeMainItem}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.listFoodContentFather}>
              <View>
                <Image
                  source={require("../../../assets/COM.jpg")}
                  style={styles.listFoodImage}
                />
              </View>
              <TouchableOpacity style={styles.listFoodTouchableOpacity}>
                <View style={styles.listFoodContent}>
                  <Text style={styles.listFoodText1}>Món Chính</Text>
                  <Image
                    source={require("../../../assets/right_arrow_icon.png")}
                    style={styles.welComeMainItem}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View> //container
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    // height: 30,
    alignItems: "center",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerBlack: {
    flexDirection: "row",
    justifyContent: "center",
  },
  contact: {},
  logoTNK: {
    width: 80,
    height: 80,
  },

  logo: {
    width: 35,
    height: 35,
    marginRight: 15
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
  },
  featuredItems: {
    flexDirection: "col",
    backgroundColor: "black",
    marginTop: 24,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    color: "white",
  },
  menuItemImage: {
    marginLeft: 20,
    width: 20,
    height: 20,
    borderRadius: 30,
  },
  menuItemText: {
    fontSize: 16,
    marginLeft: 5,
    color: "white",
  },
  orderButton: {
    backgroundColor: "red",
    marginTop: 14,
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
  },
  orderButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  welCome: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    paddingTop: 30,
  },
  welComeItem: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  welComeMain: {
    marginLeft: 10,
  },
  welComeMainText: {
    fontSize: 25,
    flexWrap: "wrap",
    textAlign: "center",
  },
  welComeMainClick: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },

  welComeMainText2: {},
  welComeMainItem: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  wrapper: {
    height: 400,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width,
    height: 300,
    resizeMode: "cover",
  },
  list: {
    // flexDirection: 'row',
    backgroundColor: 'yellow'
    // justifyContent: 'space-between'
  },
  listFoodTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listFoodText: {
    fontSize: 20,
  },
  listFoodSoc: {
    width: "40%",
    height: 1,
    backgroundColor: "#ccc",
  },
  listFoodContentFather: {
    marginTop: 20,
    backgroundColor: "red",

    // width: "60%",
    // height: 200,
    // backgroundColor: 'white',
    // borderWidth: 1, // Độ rộng của viền
    // borderColor: 'black', // Màu sắc của viền
    // borderRadius: 10, // Độ cong của viền
  },
  listFoodTouchableOpacity: {
    marginTop: 10,
  },
  listFoodImage: {
    flex: 2,
    width: "50%",
    height: 150,
  },
  listFoodContent: {
    flex: 1,
    flexDirection: "row",
  },
});
export default Home;
