import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Dimensions, FlatList, StatusBar, TouchableOpacity } from 'react-native'
import { Colors } from '../constants/Colors';


const { width, height } = Dimensions.get('screen');

const HomeScreen = props => {

    return <View style={styles.container}>
        <Text>Shreehari</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default HomeScreen




