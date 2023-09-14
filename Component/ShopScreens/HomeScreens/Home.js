import { useState } from "react";
import Swiper from "react-native-swiper";
import Header from "../../HeaderScreen/Header";
import { styles } from "./StylesHome";
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

// const { width } = Dimensions.get("window");

const images = [
  "https://static.kfcvietnam.com.vn/images/category/lg/COM.jpg?v=gbw2Z3",
  "https://static.kfcvietnam.com.vn/images/category/lg/TRANG MIENG.jpg?v=gbw2Z3",
  "https://static.kfcvietnam.com.vn/images/items/lg/duasori-d.jpg?v=gbw2Z3",
];
const Home = ({ navigation }) => {
  return (

    // Header
    <View style={styles.container}>
     <Header/>

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

export default Home;


