import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
// import jwt from "jsonwebtoken";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../HeaderScreen/Header";
import Shop from "./ShopScreens/Shop";
import Home from "./ShopScreens/HomeScreens/Home";
import Menu from "./ShopScreens/MenuScreens/Menu";
// import PayScreen from "./ShopScreens/PayScreen";
import Promotion from "./ShopScreens/PromotionScreens/Promotion";
import Registration from "../Registration";
import {
  PostLogin,
  PostToken,
  setAccessUserId,
  setAccessToken,
  getAccessToken,
  addTokenToAxios,
} from "../../../Services/RegisterLogin/authentication";
import { styles } from "./StylesLogin";
import { AntDesign } from "@expo/vector-icons";
import { validateEmail, validatePassWord } from "../../../ultils/validates";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkAuthenticated = async () => {
    //Check đăng nhập
    try {
      const accessToken = await getAccessToken();
      if (accessToken) {
        addTokenToAxios(accessToken);
        navigation.navigate("Shop");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const loginApi = async () => {
    if (validateEmail(email) && validatePassWord(password)) {
      try {
        const TokenResponse = await PostToken({
          email,
          password,
        });
       
        const result = await setAccessToken(TokenResponse?.data?.token);
        const userId = await setAccessUserId(String(TokenResponse?.data?.id))
        if (result) {
          if (TokenResponse && TokenResponse?.data?.role === "KhachHang") {
            alert("Đăng nhập thành công!");
            navigation.navigate("Shop", {userId: TokenResponse?.data?.id});
          }else if(TokenResponse && TokenResponse?.data?.role === "NguoiBan"){
            alert("Đăng nhập thành công!");
            navigation.navigate("Promotion", {userId: TokenResponse?.data?.id});
          }else{
            alert("Role là chuỗi rỗng")
            return false
          }

          const accessToken = await getAccessToken();
          console.log(accessToken);
        } else {
          alert("Lỗi khi đăng nhập: Không thể lưu accesstoken");
        }
      } catch (err) {
        if (err.response) {
          const errorMessage = err.response.data;
          alert(errorMessage);
        } else {
          console.error("An error occurred:", err);
        }
      }
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 20, paddingTop: 60 }}>
          <Text style={styles.mainText}>Đăng nhập</Text>
          <View style={styles.content}>
            <TextInput
              placeholder="Địa chỉ E-mail"
              style={styles.inputText}
              value={email}
              onChangeText={(value) => setEmail(value)}
            />
            <TextInput
              placeholder="Mật khẩu"
              style={styles.inputText}
              value={password}
              onChangeText={(value) => setPassword(value)}
            />
          </View>

          <View style={{ paddingTop: 15, paddingHorizontal: 8 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{ textAlign: "right" }}>Bạn quên mật khẩu?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.TouchableButton} onPress={loginApi}>
              <Text style={styles.TextButtons}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>

          <View style={{ paddingVertical: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: "700" }}>
              Hoặc đăng nhập với
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                paddingVertical: 10,
              }}
            >
              <TouchableOpacity style={{ paddingHorizontal: 20 }}>
                <AntDesign name="facebook-square" size={50} color="blue" />
              </TouchableOpacity>
              <TouchableOpacity style={{ paddingHorizontal: 20 }}>
                <AntDesign name="google" size={50} color="red" />
              </TouchableOpacity>
              <TouchableOpacity style={{ paddingHorizontal: 20 }}>
                <AntDesign name="apple1" size={50} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              paddingBottom: 30,
            }}
          >
            <Text>Bạn chưa có tài khoản?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Registration")}
            >
              <Text style={{ paddingHorizontal: 10, fontWeight: "600" }}>
                Đăng ký.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Image
          source={require("../../../assets/image_3.jpg")}
          style={{ width: "100%", height: 500 }}
        />
      </ScrollView>
    </View>
  );
};

export default Login;
