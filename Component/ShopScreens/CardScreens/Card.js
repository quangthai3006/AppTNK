// import { useState } from "react";
// import {
//   View,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
// } from "react-native";

// const Card = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <View>
//         <Text style={styles.mainText}>Header</Text>
//       </View>

//       <View>
//         <Text style={styles.label}>Nhập chiều cao cho (m)</Text>
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     padding: 20,
//   },
//   mainText: {
//     marginTop: 20,
//     fontSize: 25,
//     fontWeight: "900",
//   },
//   content: {
//     alignItems: "flex-start",
//     width: "100%",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#bbb",
//     padding: 5,
//     borderRadius: 5,
//     width: "100%",
//   },
//   label: {
//     marginVertical: 10,
//   },
//   buttons: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "100%",
//     marginTop: 20,
//   },
//   button: {
//     borderWidth: 1,
//     borderColor: "#000",
//     padding: 15,
//     borderRadius: 5,
//     backgroundColor: "pink",
//     width: "45%",
//     alignItems: "center",
//   },
// });
// export default Card;

import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Card() {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Normal checkbox</Text>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
        <Text style={styles.paragraph}>Custom colored checkbox</Text>
      </View>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} disabled value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Disabled checkbox</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});

