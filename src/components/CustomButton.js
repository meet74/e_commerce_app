import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { Colors } from '../constants/Colors'

const { width, height } = Dimensions.get('screen')

const CustomButton = props => {
    return <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{props.title}</Text>
    </View>
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: 60,
        width: width * 0.85,
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: Colors.primaryColor,
        justifyContent: "center",
        marginVertical: 10,
        marginTop: 20,
        borderRadius: 10
    },
    buttonText: {
        fontFamily: "MontserratBold",
        color: "white",
        letterSpacing: 1,
        fontSize: 16
    }
})

export default CustomButton