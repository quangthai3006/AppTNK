import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerChild: {
    marginHorizontal: 20,
  },
  header: {
    marginTop: 60,
    marginBottom: 10,
    marginHorizontal: 8,
  },
  headerContent: {
    fontWeight: "700",
    fontSize: 30,
  },
  content: {
    borderWidth: 1,
    borderColor: "#ccc",
    // height: 135,
    borderRadius: 8,
    // shadowColor: "#000",
    // shadowRadius: 1,
    // shadowOpacity: 0.8,
    // elevation: 1
  },

  contentImage: {
    flexDirection: "row",
    // marginLeft: 10,
    marginTop: 5,
    marginHorizontal: 15,
  },
  contentChild: {
    // marginHorizontal: 10,
  },
  contentButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    // shadowColor: "#000",
    // shadowOpacity: 0.8,
    backgroundColor: "#ccc",
    // shadowOffset: { width: 2, height: 2 },
    // elevation: 5,
    width: 70,
    height: 35,
    marginLeft: "75%"
  },
  contentButtonText: {
    textAlign: "center",
    marginTop: 6,
    color: "white",
  }

});