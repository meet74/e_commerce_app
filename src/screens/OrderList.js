import React from 'react'
import { View, Text, Image, Pressable, Dimensions, FlatList } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useSelector } from 'react-redux'

const { width, height } = Dimensions.get('screen')

const OrderListScreen = () => {
    const orderData = useSelector(state => state.order.orders)
    return <View style={{ flex: 1 }}>
        <Text style={{ fontFamily: "LatoBold", fontSize: 19, paddingLeft: 8, marginVertical: 25 }}>Your Orders</Text>
        <FlatList
            data={orderData}
            renderItem={({ item }) => {

                return <View >
                    <View style={{ flexDirection: "row" }}>
                        <Image
                            source={{ uri: item.image }}
                            style={{ height: 150, width: 150 }}
                            resizeMode="contain"
                        />
                        <View style={{ margin: 10, flex: 1, justifyContent: "space-around", marginLeft: 25, alignItems: "flex-start" }}>
                            <Text style={{ fontFamily: "LatoRegular", fontSize: 20, paddingLeft: 8 }}>{item.name}</Text>
                            <Text style={{ fontFamily: "LatoBold", fontSize: 20, paddingLeft: 8 }}>₹ {item.price}</Text>
                            <Text style={{ fontFamily: "LatoRegular", fontSize: 15, paddingLeft: 8 }}>Ordered on: {item.time}</Text>
                            <Text style={{ fontFamily: "LatoRegular", fontSize: 18, paddingLeft: 8 }}>Quantity:  {item.quantity}</Text>
                        </View>

                    </View>
                    <View style={{ width: width * 0.9, alignSelf: "center", borderWidth: 0.50, borderColor: "lightgrey", marginVertical: 15 }} />
                </View>
            }}
        />
    </View>
}

export default OrderListScreen
