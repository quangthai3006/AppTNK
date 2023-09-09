import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";


const Menu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.mainText}>Header</Text>
      </View>

      <View>
        <Text style={styles.label}>Nhập chiều cao cho (m)</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
  mainText: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: "900",
  },
  content: {
    alignItems: "flex-start",
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#bbb",
    padding: 5,
    borderRadius: 5,
    width: "100%",
  },
  label: {
    marginVertical: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  button: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 15,
    borderRadius: 5,
    backgroundColor: "pink",
    width: "45%",
    alignItems: "center",
  },
});
export default Menu;
