import React, { Component, useState } from "react";
import { styles } from "./StylesRegistration";
import Checkbox from "expo-checkbox";
import Home from "../ShopScreens/HomeScreens/Home";
import { registerApi } from "../../Services/authentication";
import { validateEmail } from "./ValiDateEmail";

import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Linking,
  Dimensions,
} from "react-native";
import Header from "../HeaderScreen/Header";
import Card from "../ShopScreens/CardScreens/Card";

const Registration = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isChecked, setChecked] = useState(false);

  const register = async () => {
  //   if(password != rePassword) {
  //     return alert("Mật khẩu không khớp")
  // }

     if(!validateEmail(email)) {
      return alert("Email không hợp lệ")
     }

    try {
      const registerResponse = await registerApi({
        name,
        email,
        password,
      });
      console.log(registerResponse);

      
      navigation.navigate("Card");
      const {name, email, password} = registerResponse;
    } catch (err) {
      // alert(err.response?.data?.message || "Lỗi không xác định");
      // alert(err.response?.data?.message);

      console.error(err);
      alert("Lỗi")
    }
  };
  const handEye = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const renderEyeIcon = () => {
    if (secureTextEntry) {
      return (
        <TouchableOpacity onPress={handEye}>
          <Image
            source={require("../../assets/eye.png")}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={handEye}>
          <Image
            source={require("../../assets/sharingan1.png")}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
      );
    }
  };

  const handleLinkPress = () => {
    Linking.openURL("https://www.facebook.com/QuangThai300622/");
  };
  const toggleCheckBox = () => {
    setChecked(!isChecked);
  };
  const handleLinkPassWord = () => {
    navigation.navigate("Home");
  };
  return (
    // Header
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View>
          <Text style={styles.createAcc}>TẠO TÀI KHOẢN</Text>
          {/* <View style={styles.viewBorderTextInput}>
            <TextInput placeholder="Họ của bạn *" />
          </View> */}
          <View style={styles.viewBorderTextInput}>
            <TextInput placeholder="Tên của bạn *" onChangeText={(value) => {
                setName(value)
            }} />
          </View>
          {/* <View style={styles.viewBorderTextInput}>
            <TextInput placeholder="Số điện thoại *" />
          </View> */}
          <View style={styles.viewBorderTextInput}>
            <TextInput placeholder="Địa chỉ Email *" onChangeText={(value) => {
                setEmail(value)
            }}/>
          </View>
          <View style={styles.viewBorderTextInput}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TextInput
                placeholder="Mật khẩu *"
                secureTextEntry={secureTextEntry}
                onChangeText={(value) => {
                setPassword(value)
            }}
              />
              {renderEyeIcon()}
            </View>
          </View>

          {/* <View style={styles.viewBorderTextInput}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TextInput
                placeholder="Nhập lại mật khẩu *"
                secureTextEntry={secureTextEntry}
                onChangeText={(value) => {
                setPassword(value)
            }}
              />
              {renderEyeIcon()}
            </View>
          </View> */}

          <View
            style={{
              flexDirection: "row",
              marginTop: 40,
              marginHorizontal: 20,
              width: 318,
            }}
          >
            <Checkbox value={isChecked} onValueChange={toggleCheckBox} />
            <View
              style={{ marginLeft: 10, flexDirection: "row", flexWrap: "wrap" }}
            >
              <Text style={{ marginBottom: 5 }}>
                {" "}
                Tôi đã đọc và đồng ý với các{""}
              </Text>
              {/* <TouchableOpacity onPress={handleLinkPress}>
                <Text
                  onPress={handleLinkPress}
                  style={{
                    color: "blue",
                    textDecorationLine: "underline",
                    marginBottom: 5,
                  }}
                >
                  Chính Sách Hoạt Động {""}
                </Text>
              </TouchableOpacity>
              <Text>và{""}</Text> */}
              <TouchableOpacity onPress={handleLinkPress}>
                <Text
                  style={{ color: "blue", textDecorationLine: "underline" }}
                >
                  Chính Sách Bảo Mật Thông Tin của TNK ViệtNam.
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={{
              marginTop: 40,
              marginHorizontal: 20,
              backgroundColor: "red",
              borderRadius: 25,
              width: 320,
              height: 50,
            }}
            onPress={register}
          >
            <Text
              style={{
                textAlign: "center",
                marginTop: 15,
                color: "white",
                fontWeight: "600",
              }}
            >
              Tạo Tài Khoản
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              marginBottom: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Bạn đã có tài khoản? {""}</Text>
            <TouchableOpacity onPress={handleLinkPassWord}>
              <Text style={{ color: "blue", textDecorationLine: "underline" }}>
                Đăng Nhập
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Registration;
