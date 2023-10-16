import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  headerBlack: {
    flexDirection: "row",
    justifyContent: "center",
  },
  contact: {
    // backgroundColor: 'red'
  },

  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
  },
  featuredItems: {
    flexDirection: "col",
    backgroundColor: "black",
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    color: "white",
  },
  menuItemImage: {
    marginLeft: 20,
    width: 20,
    height: 20,
    borderRadius: 30,
  },
  menuItemText: {
    fontSize: 16,
    marginLeft: 5,
    color: "white",
  },
  orderButton: {
    backgroundColor: "red",
    marginTop: 14,
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
  },
  orderButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  welCome: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    paddingTop: 30,
  },
  welComeItem: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  welComeMain: {
    marginLeft: 10,
  },
  welComeMainText: {
    fontSize: 25,
    flexWrap: "wrap",
    textAlign: "center",
  },
  welComeMainClick: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },

  welComeMainText2: {},
  welComeMainItem1: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  wrapper: {
    height: 400,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width,
    height: 300,
    resizeMode: "cover",
  },
  listFood: {
    marginTop: 50,
    margin: 10,
  },
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  listFoodTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listFoodText: {
    fontSize: 20,
    fontWeight: "700",
  },
  listFoodSoc: {
    width: "35%",
    height: 1,
    backgroundColor: "#ccc",
    marginRight: 15

    
  },
  listFoodContentFather: {
    marginTop: 20,
    backgroundColor: "red",

    // width: "60%",
    // height: 200,
    // backgroundColor: 'white',
    // borderWidth: 1, // Độ rộng của viền
    // borderColor: 'black', // Màu sắc của viền
    // borderRadius: 10, // Độ cong của viền
  },
  listFoodTouchableOpacity: {
    marginTop: 10,
  },
  listFoodImage: {
    flex: 2,
    width: "50%",
    height: 150,
  },
  listFoodContent: {
    flex: 1,
    flexDirection: "row",
  },
  imageContainer: {
    width: 160,
    height: 130,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#ccc",
    overflow: "hidden", // Đảm bảo hình ảnh không tràn ra ngoài khung
    borderTopStartRadius: 10,
    borderTopEndRadius: 10, // Bo tròn góc của khung
    shadowColor: "#000", // Màu đổ bóng
    // shadowOffset: { width: 0, height: 2 }, // Độ dịch của đổ bóng
    shadowOpacity: 0.8, // Độ trong suốt của đổ bóng
    // // shadowRadius: 4, // Bán kính của đổ bóng
    // elevation: 5, // Độ cao của đổ bóng trên Android
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  contentContainer: {
    width: 160,
    height: 40,
    backgroundColor: "white",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    overflow: "hidden", // Đảm bảo hình ảnh không tràn ra ngoài khung
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10, // Bo tròn góc của khung
    shadowColor: "#000", // Màu đổ bóng
    // shadowOffset: { width: 0, height: 2 }, // Độ dịch của đổ bóng
    shadowOpacity: 0.8, // Độ trong suốt của đổ bóng
    // // shadowRadius: 4, // Bán kính của đổ bóng
    // elevation: 5,
    flexDirection: "row",
  },
  foodName: {
    marginTop: 10,
    fontSize: 16,
    marginLeft: 5
  },

  welComeMainItem: {
    width: 20,
    height: 20,
    marginLeft: 6,
    marginTop:12,
  },
});
