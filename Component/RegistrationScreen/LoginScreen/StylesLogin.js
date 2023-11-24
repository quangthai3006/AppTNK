import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
    marginTop: 70,
  },
  mainText: {
    marginTop: 20,
    fontSize: 40,
    fontWeight: "900",
    paddingBottom: 20,
  },
  content: {
    alignItems: "flex-start",
    width: "100%",
  },
  input: {
    borderWidth: 3,
    borderColor: "#bbb",
    padding: 10,
    borderRadius: 10,
    width: "100%",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  TouchableButton: {
    backgroundColor: "#28A745",
    borderRadius: 40,
    width: "100%",
    alignItems: "center",
    paddingVertical: 15,
    marginVertical: 5,
  },
  TextButtons: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "700",
  },
  inputText: {
    borderBottomWidth: 2,
    borderColor: "gray",
    width: "100%",
    paddingVertical: 20,
    paddingLeft: 15,
  },
});
