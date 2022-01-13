import React, { useState } from 'react'
import { View, Text, StyleSheet, StatusBar, Image, Dimensions, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import { Colors } from '../constants/Colors'
import { Fontisto } from '@expo/vector-icons'
import CustomTextInput from '../components/TextInput'
import CustomButton from '../components/CustomButton'

const { width, height } = Dimensions.get('screen')
const SignUp = props => {
    const [email, setemail] = useState(null)
    const [password, setpassword] = useState(null)
    const [message, setmessage] = useState(null)

    const submitHandler = async () => {
        console.log("Submit");
        fetch(`http://192.168.1.7:3000/signup?email=${email}&password=${password}`).then((result) => result.json()).then(data => {

            if (data.message == 'Success') {
                props.navigation.navigate('Home')
            } else {
                ToastAndroid.show('User already exist', ToastAndroid.LONG)
            }
        })
    }
    if (message != null) {
        ToastAndroid.show(message, ToastAndroid.LONG)
        setmessage(null)
        if (data.message == 'Success') {
            props.navigation.navigate('Home')
        } else {
            ToastAndroid.show('Wrong Password', ToastAndroid.LONG)
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Sign Up</Text>
            </View>
            <Image
                source={require('../../assets/signup_img.jpg')}
                resizeMode="contain"
                style={styles.image} />
            <View style={{ margin: 8, marginHorizontal: 8 }}>
                <Text style={styles.mainText}>Email</Text>
                <View style={styles.textInputContainer}>
                    <TextInput style={{ flex: 1, fontSize: 16 }} onChangeText={val => setemail(val)} />
                    <Fontisto name={props.icon} size={24} color={Colors.primaryColor} style={{ margin: 10 }} />
                </View>
            </View>
            <View style={{ margin: 8, marginHorizontal: 8 }}>
                <Text style={styles.mainText}>Password</Text>
                <View style={styles.textInputContainer}>
                    <TextInput style={{ flex: 1, fontSize: 16 }} onChangeText={val => setpassword(val)} />
                    <Fontisto name={props.icon} size={24} color={Colors.primaryColor} style={{ margin: 10 }} />
                </View>
            </View>

            <TouchableOpacity activeOpacity={0.9} onPress={submitHandler}>
                <CustomButton
                    title="SIGN UP"
                />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => props.navigation.navigate('Login')}>
                <Text style={styles.bottomText}>Already have account</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    headerText: {
        fontWeight: "bold",
        color: Colors.primaryColor,
        fontSize: 40,
        margin: 20
    },
    bottomText: {
        marginVertical: 15,
        color: "#bbbabc",
        fontSize: 15,
        alignSelf: "center",
        fontFamily: "LatoBold"
    },
    image: {
        height: height * 0.4,
        width: width * 0.8,
        alignSelf: "center"
    },
    headerContainer: {
        marginTop: StatusBar.currentHeight * 0.9,
        bottom: -25,
        left: 10
    },
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

export default SignUp

