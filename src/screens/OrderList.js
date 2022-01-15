import React from 'react'
import { View, Text, Image, Pressable, Dimensions } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const { width, height } = Dimensions.get('screen')

const OrderListScreen = () => {
    return <View>
        <Text style={{ fontFamily: "LatoBold", fontSize: 19, paddingLeft: 8, marginVertical: 10 }}>Your Orders</Text>
        <View >
            <View style={{ flexDirection: "row" }}>
                <Image
                    source={{ uri: "https://5.imimg.com/data5/YH/UA/NU/SELLER-38458293/dxsp32-1-500x500.png" }}
                    style={{ height: 150, width: 150 }}
                    resizeMode="contain"
                />
                <View style={{ margin: 10, flex: 1, justifyContent: "space-around", marginLeft: 25 }}>
                    <Text style={{ fontFamily: "LatoRegular", fontSize: 20, paddingLeft: 8 }}>Shoes</Text>
                    <Text style={{ fontFamily: "LatoRegular", fontSize: 18 }}>Quantity:  1</Text>
                </View>

            </View>
            <View style={{ width: width * 0.9, alignSelf: "center", borderWidth: 0.50, borderColor: "lightgrey" }} />
        </View>
    </View>
}

export default OrderListScreen
