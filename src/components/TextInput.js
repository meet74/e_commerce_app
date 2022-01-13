import React from 'react'
import { View, Text, StyleSheet, StatusBar, Image, Dimensions, TextInput } from 'react-native'
import { Colors } from '../constants/Colors'
import { Fontisto } from '@expo/vector-icons'

const { width, height } = Dimensions.get('screen')

const CustomTextInput = props => {
    return <View style={{ margin: 8, marginHorizontal: 8 }}>
        <Text style={styles.mainText}>{props.header}</Text>
        <View style={styles.textInputContainer}>
            <TextInput style={{ flex: 1, fontSize: 16 }} />
            <Fontisto name={props.icon} size={24} color={Colors.primaryColor} style={{ margin: 10 }} />
        </View>
    </View>
}

const styles = StyleSheet.create({
    mainText: {
        marginHorizontal: 15,
        fontSize: 16,
        fontFamily: "LatoBold",
        color: Colors.primaryColor
    },
    textInputContainer: {
        flexDirection: "row",
        borderColor: "#cecece",
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        margin: 10
    }
})

export default CustomTextInput