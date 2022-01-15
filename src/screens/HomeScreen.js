import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, FlatList, StatusBar } from 'react-native'
import { Colors } from '../constants/Colors';
import { Data } from '../data/Dummy_data'


const { width, height } = Dimensions.get('screen');

const HomeScreen = props => {

    return <View style={styles.container}>
        <FlatList
            data={Data}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={itemData => {
                return <View style={{ height: 250, borderWidth: 1, borderColor: "grey", margin: 10, backgroundColor: "white" }}>

                    <Image source={{ uri: itemData.item.image }} style={{ height: 150, width: 120, borderRadius: 10, margin: 25 }} resizeMode={"contain"} />
                    <Text style={{ alignSelf: "center" }}>{itemData.item.name}</Text>
                </View>
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




