import React from 'react'
import { View, Text, Image, Pressable, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('screen')

const OrderDetailScreen = props => {
    return <View>
        <View >
            <Text style={{ fontFamily: "LatoBold", fontSize: 25, padding: 5 }}>Items</Text>
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
                    </View>
                </View>

            </View>
            <View style={{ width: width * 0.9, alignSelf: "center", borderWidth: 0.50, borderColor: "lightgrey" }} />
        </View>
        <View style={{ width: width * 0.9, backgroundColor: "white", alignSelf: "center", justifyContent: "space-around", height: 120, marginTop: 25 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontFamily: "LatoRegular", fontSize: 15, padding: 5 }}>Items:</Text>
                <Text style={{ fontFamily: "LatoRegular", fontSize: 15, padding: 5 }}>₹ 2999</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontFamily: "LatoRegular", fontSize: 15, padding: 5 }}>Delivery:</Text>
                <Text style={{ fontFamily: "LatoRegular", fontSize: 15, padding: 5 }}>₹ 50</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 10 }}>
                <Text style={{ fontFamily: "LatoBold", fontSize: 20, padding: 5 }}>Order Total:</Text>
                <Text style={{ fontFamily: "LatoBold", fontSize: 20, padding: 5 }}>₹ 3049</Text>
            </View>
        </View>
        <View style={{ width: width * 0.9, backgroundColor: "white", alignSelf: "center", justifyContent: "space-around", height: 120, marginTop: 25, flexDirection: "row" }}>
            <Text style={{ fontFamily: "LatoRegular", fontSize: 18, padding: 5 }}>Payment Type:</Text>
            <Text style={{ fontFamily: "LatoBold", fontSize: 18, padding: 5 }}>Cash on Delivery</Text>
        </View>
        <Pressable >
            <View style={{ width: width * 0.8, height: 50, backgroundColor: "purple", alignItems: "center", justifyContent: "center", alignSelf: "center", borderRadius: 10, marginVertical: 15 }}>
                <Text style={{ color: "white", fontFamily: "MontserratBold", fontSize: 16 }}>Place Order</Text>
            </View>
        </Pressable>
    </View>
}

export default OrderDetailScreen