import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    body: {
        flexDirection: "row",
        justifyContent: "space-around",
        // marginTop: 10,
      },
      bodySearch: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        width: "90%",
        borderRadius: 15,
      },
})