import React, { Component, useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  //   Picker,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Header from "../../../../HeaderScreen/Header";
import { styles } from "./StylePay";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Pay({ navigation }) {
  const [task, setTask] = useState({
    so: "",
    tenUngVien: "",
    className: "",
    email: "",
    address: "",
  });
  const [selectedValue, setSelectedValue] = useState("momo");

  //   const addTaskAction = async () => {
  //     if (
  //       validateName(task.tenUngVien) &&
  //       validateEmail(task.email) &&
  //       validateMssv(task.maUngVien)
  //     ) {
  //       try {
  //         const { data } = await addTaskApi(task);
  //         alert("Thêm thành công!");
  //         navigation.navigate("TaskScreen");
  //       } catch (err) {
  //         const message = err.response ? err.response.data : err.message;
  //         alert(message.data);
  //       }
  //     }
  //   };

  //   const handleCancel = () => {
  //     Alert.alert(
  //       "Hủy bỏ thêm mới ứng viên",
  //       "Bạn có muốn hủy bỏ thêm mới ứng viên?",
  //       [
  //         {
  //           text: "Không",
  //           style: "cancel",
  //         },
  //         {
  //           text: "Có",
  //           onPress: () => {
  //             navigation.navigate("TaskScreen");
  //           },
  //         },
  //       ],
  //       { cancelable: false }
  //     );
  //   };

  return (
    <View style={styles.container}>
      <Header />
      <KeyboardAwareScrollView>
        <View style={styles.header}>
          <Text style={{ fontWeight: "700", fontSize: 30 }}>
            Thanh toán hóa đơn
          </Text>
        </View>
        <View>
          <Text style={{ marginTop: 30, marginLeft: 20, marginBottom: 5 }}>
            Số tiền
          </Text>
          <TextInput
            placeholder=" Nhập sô tiền *"
            style={styles.bodyTextInput}
            onChangeText={(name) => {
              setTask({ ...task, tenUngVien: name });
            }}
          />
        </View>

        <View>
          <Text style={{ marginTop: 30, marginLeft: 20, marginBottom: 5 }}>
            Nội dung thanh toán
          </Text>
          <TextInput
            placeholder=" Nhập nội dung *"
            onChangeText={(studentCode) => {
              setTask({ ...task, maUngVien: studentCode });
            }}
            style={{
              borderWidth: 1,
              width: "90%",
              marginLeft: 20,
              height: 100,
            }}
          />
        </View>

        <View>
          <Text style={{ marginTop: 30, marginLeft: 20, marginBottom: 5 }}>
            Ngân hàng
          </Text>
          <View>
            <Picker
              style={styles.picker}
              itemStyle={styles.pickerItem}
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item label="Momo" value="momo" />
              <Picker.Item label="VNBANK" value="vnbank" />
              <Picker.Item label="VISA" value="visa" />
              <Picker.Item label="MBAPP" value="Ung dung MobileBanking" />
              <Picker.Item label="VNPAYQR" value="VNPAYQR" />
              <Picker.Item label="NCB" value="Ngan hang NCB" />
              <Picker.Item label="SACOMBANK" value="Ngan hang SacomBank  " />
            </Picker>
          </View>
        </View>

        <View>
          <Text style={{ marginTop: 30, marginLeft: 20, marginBottom: 5 }}>
            Ngôn ngữ
          </Text>
          <Picker
              style={styles.picker}
              itemStyle={styles.pickerItem}
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item label="Tiếng Việt" value="vn" />
              <Picker.Item label="English" value="en" />
              
            </Picker>
        </View>

        <View
          style={{
            marginBottom: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={styles.orderButton}>
            <Text style={styles.orderButtonText}>Thanh toán hóa đơn</Text>
          </TouchableOpacity>
        </View>

        {/* <View>
          <Text style={{ marginTop: 30, marginLeft: 20, marginBottom: 5 }}>
            Địa chỉ
          </Text>
          <TextInput
            placeholder=" Nhập địa chỉ *"
            onChangeText={(address) => {
              setTask({ ...task, address: address });
            }}
            style={{
              borderWidth: 1,
              width: "90%",
              marginLeft: 20,
              height: 100,
            }}
          />
        </View> */}

        {/* <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            justifyContent: "space-between",
            alignItems: "center",
            width: "90%",
            marginLeft: 20,
          }}
        >
          <TouchableOpacity onPress={handleCancel}>
            <Text style={{ color: "blue", textDecorationLine: "underline" }}>
              Hủy bỏ
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={addTaskAction}>
            <Text
              style={{
                borderWidth: 1,
                width: 70,
                height: 20,
                textAlign: "center",
              }}
            >
              Lưu lại
            </Text>
          </TouchableOpacity>
        </View> */}
      </KeyboardAwareScrollView>
    </View>
  );
}
