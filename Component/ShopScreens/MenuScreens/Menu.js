import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const images = [
  'https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg',
  'https://vapa.vn/wp-content/uploads/2022/12/anh-con-nguoi-dep-003.jpg',
  'https://img.thuthuatphanmem.vn/uploads/2018/10/26/canh-dep-thien-nhien-con-nguoi-viet-nam_055419977.jpg',
  // Thêm các URL ảnh khác vào đây
];

const Menu = () => {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={true} // Hiển thị nút Trái/Phải
        autoplay={true}     // Tự động chuyển đổi ảnh
      >
        {images.map((imageUrl, index) => (
          <View key={index} style={styles.slide}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width,
    height: 300,
    resizeMode: 'cover',
  },
});

export default Menu;
