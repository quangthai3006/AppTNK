import React, { useState } from "react";
import { View, Text } from "react-native";
import { Checkbox } from "expo-checkbox";

const Pay = () => {
  const [isCustomer, setIsCustomer] = useState(false);
  const [isSeller, setIsSeller] = useState(false);

  const handleCustomerChange = () => {
    setIsCustomer(true);
    setIsSeller(false);
  };

  const handleSellerChange = () => {
    setIsSeller(true);
    setIsCustomer(false);
  };

  return (
    <View>
      <Text>Chọn loại người dùng:</Text>
      <View style={{ flexDirection: "row" }}>
        <Checkbox
          title="Khách hàng"
          value={isCustomer}
          onValueChange={handleCustomerChange}
        />
        <Text>Khách Hàng</Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <Checkbox
          title="Người bán"
          value={isSeller}
          onValueChange={handleSellerChange}
        />
        <Text>Người Bán</Text>
      </View>
    </View>
  );
};

export default Pay;
