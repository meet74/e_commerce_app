import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, FlatList, StatusBar, Pressable } from 'react-native'
import { Colors } from '../constants/Colors';
import { Data } from '../data/Dummy_data'


const { width, height } = Dimensions.get('screen');

const HomeScreen = props => {

    const submitHandler = (id) => {
        props.navigation.navigate('ProductDetail', id)
    }
    return <View style={styles.container}>
        <FlatList
            data={Data}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Pressable onPress={() => submitHandler(item.id)}>
                    <View style={{ height: 250, borderWidth: 1, borderColor: "lightgrey", margin: 10, backgroundColor: "white", borderRadius: 15 }}>
                        <Image source={{ uri: item.image }} style={{ height: 150, width: 120, borderRadius: 10, margin: 25 }} resizeMode={"contain"} />
                        <Text style={{ alignSelf: "center" }}>{item.name}</Text>
                        <Text style={{ alignSelf: "center" }}>Rs {item.price}</Text>
                    </View>
                </Pressable>
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
    }
})

export default HomeScreen




