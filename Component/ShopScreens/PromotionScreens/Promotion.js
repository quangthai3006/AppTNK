import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const foodData = [
  { id: '1', name: 'Gà Rán', description: 'Gà Rán 2 miếng', price: '50,000đ' },
  { id: '2', name: 'Burger', description: 'Burger gà', price: '45,000đ' },
  { id: '3', name: 'Khoai Tây Chiên', description: 'Khoai tây', price: '20,000đ' },
  // Thêm các món ăn khác vào đây
];

const Promotion = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      // onPress={() => navigation.navigate('FoodDetail', { food: item })}
    >
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={foodData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  item: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
});

export default Promotion;
