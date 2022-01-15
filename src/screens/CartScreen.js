import React from 'react'
import { View, Text, Image, Pressable, Dimensions } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const { width, height } = Dimensions.get('screen')
const CartScreen = (props) => {

    const submitHandler = () => {
        props.navigation.navigate('OrderDetail')
    }
    return <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ marginVertical: 15 }}>
            <Text style={{ fontSize: 19, paddingLeft: 8 }}>Subtotal  <Text style={{ fontFamily: "LatoBold", fontSize: 22 }}>₹ 2999</Text></Text>
            <Pressable onPress={submitHandler}>
                <View style={{ width: width * 0.8, height: 50, backgroundColor: "purple", alignItems: "center", justifyContent: "center", alignSelf: "center", borderRadius: 10, marginVertical: 25 }}>
                    <Text style={{ color: "white", fontFamily: "MontserratBold", fontSize: 16 }}>Proceed to Buy</Text>
                </View>
            </Pressable>
        </View>
        <View >
            <View style={{ flexDirection: "row" }}>
                <Image
                    source={{ uri: "https://5.imimg.com/data5/YH/UA/NU/SELLER-38458293/dxsp32-1-500x500.png" }}
                    style={{ height: 150, width: 150 }}
                    resizeMode="contain"
                />
                <View style={{ margin: 10, flex: 1, justifyContent: "space-around" }}>
                    <Text style={{ fontFamily: "LatoRegular", fontSize: 20, paddingLeft: 8 }}>Shoes</Text>
                    <Text style={{ fontFamily: "LatoBold", fontSize: 21 }}>₹ 2999</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ fontFamily: "LatoRegular", fontSize: 18, alignSelf: "center" }}>Quantity: 1</Text>
                        <Pressable>
                            <View style={{ height: 35, width: 100, backgroundColor: "red", borderRadius: 5, alignItems: "center", justifyContent: "center", alignSelf: "flex-end", flexDirection: "row" }}>
                                <Text style={{ fontFamily: "LatoRegular", color: "white", paddingRight: 5 }}>Delete</Text>
                                <MaterialCommunityIcons name="delete-empty-outline" size={22} color="white" />
                            </View>
                        </Pressable>
                    </View>
                </View>

            </View>
            <View style={{ width: width * 0.9, alignSelf: "center", borderWidth: 0.50, borderColor: "lightgrey" }} />
        </View>

    </View>
}

export default CartScreen
