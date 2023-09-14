import { StyleSheet, Dimensions, } from 'react-native'
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
    welComeMainItem: {
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
    list: {
      // flexDirection: 'row',
      backgroundColor: "yellow",
      // justifyContent: 'space-between'
    },
    listFoodTitle: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    listFoodText: {
      fontSize: 20,
    },
    listFoodSoc: {
      width: "40%",
      height: 1,
      backgroundColor: "#ccc",
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
  });