import React, { useState } from 'react'
import { View, Text, StyleSheet, StatusBar, Image, Dimensions, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import { Colors } from '../constants/Colors'
import { Fontisto } from '@expo/vector-icons'
import CustomTextInput from '../components/TextInput'
import CustomButton from '../components/CustomButton'

const { width, height } = Dimensions.get('screen')

const Login = props => {
    const [email, setemail] = useState(null)
    const [password, setpassword] = useState(null)

    const submitHandler = async () => {
        console.log(password);
        console.log(email);
        console.log("Submit");
        fetch(`https://e-commerce-app74.herokuapp.com/app/login?email=${email}&password=${password}`).then((result) => result).then(data => {
           
                ToastAndroid.show('Successfully Logged in', ToastAndroid.LONG)
                props.navigation.navigate('TabBar')
            
        })

    }
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Login</Text>
            </View>
            <Image
                source={require('../../assets/login_img.jpg')}
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
                    title="LOG IN"
                />
            </TouchableOpacity>
            <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 15 }}>
                <Text style={styles.bottomText}>Forgot your password?</Text>
                <TouchableOpacity activeOpacity={1} onPress={() => props.navigation.navigate('Signup')}>
                    <Text style={styles.bottomText}>Register new account</Text>
                </TouchableOpacity>
            </View>
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
        marginVertical: 10,
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

export default Login

