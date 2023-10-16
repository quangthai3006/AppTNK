import { StyleSheet } from "react-native";

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
  backgroundImage: {
    flex: 1,
    width: '80%',
    height: '80%',
  
  },
  image: {
    width: 100,
    height: 100,
  },
  orderButton: {
    backgroundColor: "#e4002b",
    marginTop: 14,
    marginLeft: 25, 
    marginRight: 130,
    paddingVertical: 12,
    borderRadius: 30,
  },
  orderButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },

});
