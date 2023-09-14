import React, { Component } from 'react'
import { styles } from './Styles';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Dimensions,
  } from "react-native";

const Header = (navigation) => {
    return (
        // Header
    // <View style={styles.container}>
        <View style={styles.header}>
            <Image
                source={require("../../assets/TNK1.png")}
                style={styles.logoTNK}
            />
            <TouchableOpacity>
                <Image
                source={require("../../assets/menu_navigation_icon.png")}
                style={styles.logo}
                />
            </TouchableOpacity>
        </View>
    // </View>
    );
}

export default Header;

