import { useState, useEffect } from "react";
import Swiper from "react-native-swiper";
import Header from "../../../../HeaderScreen/Header";
import { styles } from "./StylesHome";
import { getAccessUserId } from "../../../../../Services/RegisterLogin/authentication";
// import Lightbox from 'react-native-lightbox';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";

// const { width } = Dimensions.get("window");

const images = [
  "https://static.kfcvietnam.com.vn/images/category/lg/COM.jpg?v=gbw2Z3",
  "https://static.kfcvietnam.com.vn/images/category/lg/TRANG MIENG.jpg?v=gbw2Z3",
  "https://static.kfcvietnam.com.vn/images/items/lg/duasori-d.jpg?v=gbw2Z3",
];
const Home = ({ navigation }) => {
  // useEffect(() => {
  //   const getUserId = async () => {
  //     try {
  //       const userId = await getAccessUserId();
  //       console.log(userId);
  //     } catch (err) {
  //       console.error("Lỗi khi lấy dữ liệu:", err);
  //     }
  //   };
  //   getUserId()
  // }, []);
  const [isChecked, setChecked] = useState(false);
  return (
    // Header
    <View style={styles.container}>
      <Header />

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
                  source={require("../../../../../assets/giao-hàng.png")}
                  style={styles.menuItemImage}
                />
                <Text style={styles.menuItemText}>Giao hàng</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuItem}>
                <Image
                  source={require("../../../../../assets/bag_shopping_icon.png")}
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
                source={require("../../../../../assets/person_account_icon.png")}
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
                    source={require("../../../../../assets//arrow_right_icon.png")}
                    style={styles.welComeMainItem1}
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
            <TouchableOpacity>
              <View style={styles.imageContainer}>
                <Image
                  source={require("../../../../../assets/KHUYEN_MAI.jpg")}
                  style={styles.image}
                />
              </View>
              <View style={styles.contentContainer}>
                <Text style={styles.foodName}>Ưu đãi</Text>
                <Image
                  source={require("../../../../../assets/right_arrow_icon.png")}
                  style={styles.welComeMainItem}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.imageContainer}>
                <Image
                  source={require("../../../../../assets/MON_MOI.jpg")}
                  style={styles.image}
                />
              </View>
              <View style={styles.contentContainer}>
                <Text style={styles.foodName}>Món mới</Text>
                <Image
                  source={require("../../../../../assets/right_arrow_icon.png")}
                  style={styles.welComeMainItem}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.list}>
            <TouchableOpacity>
              <View style={styles.imageContainer}>
                <Image
                  source={require("../../../../../assets/GA.jpg")}
                  style={styles.image}
                />
              </View>
              <View style={styles.contentContainer}>
                <Text style={styles.foodName}>Gà Rán - Gà Quay</Text>
                <Image
                  source={require("../../../../../assets/right_arrow_icon.png")}
                  style={styles.welComeMainItem}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.imageContainer}>
                <Image
                  source={require("../../../../../assets/COM.jpg")}
                  style={styles.image}
                />
              </View>
              <View style={styles.contentContainer}>
                <Text style={styles.foodName}>Burger - Cơm</Text>
                <Image
                  source={require("../../../../../assets/right_arrow_icon.png")}
                  style={styles.welComeMainItem}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.list}>
            <TouchableOpacity>
              <View style={styles.imageContainer}>
                <Image
                  source={require("../../../../../assets/GA.jpg")}
                  style={styles.image}
                />
              </View>
              <View style={styles.contentContainer}>
                <Text style={styles.foodName}>Gà Rán - Gà Quay</Text>
                <Image
                  source={require("../../../../../assets/right_arrow_icon.png")}
                  style={styles.welComeMainItem}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.imageContainer}>
                <Image
                  source={require("../../../../../assets/COM.jpg")}
                  style={styles.image}
                />
              </View>
              <View style={styles.contentContainer}>
                <Text style={styles.foodName}>Burger - Cơm</Text>
                <Image
                  source={require("../../../../../assets/right_arrow_icon.png")}
                  style={styles.welComeMainItem}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View> //container
  );
};

export default Home;

// <TouchableOpacity style={styles.listFoodContentFather}>
//               <View>
//                 <Image
//                   source={require("../../../assets/COM.jpg")}
//                   style={styles.listFoodImage}
//                 />
//               </View>
//               <View style={styles.listFoodTouchableOpacity}>
//                 <View style={styles.listFoodContent}>
//                   <Text style={styles.listFoodText1}>Món Chính</Text>
//                   <Image
//                     source={require("../../../assets/right_arrow_icon.png")}
//                     style={styles.welComeMainItem}
//                   />
//                 </View>
//               </View>
//             </TouchableOpacity>

//             <View style={styles.listFoodContentFather}>
//               <View>
//                 <Image
//                   source={require("../../../assets/COM.jpg")}
//                   style={styles.listFoodImage}
//                 />
//               </View>
//               <TouchableOpacity style={styles.listFoodTouchableOpacity}>
//                 <View style={styles.listFoodContent}>
//                   <Text style={styles.listFoodText1}>Món Chính</Text>
//                   <Image
//                     source={require("../../../assets/right_arrow_icon.png")}
//                     style={styles.welComeMainItem}
//                   />
//                 </View>
//               </TouchableOpacity>
//             </View>
