import React, { useRef } from 'react'
import { View, Text, Image, Pressable, Dimensions, FlatList, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import RBSheet from 'react-native-raw-bottom-sheet'

import * as cartActions from '../store/actions/cart'
import * as orderActions from '../store/actions/order'

const { width, height } = Dimensions.get('screen')

const OrderDetailScreen = ({ navigation, route }) => {
    const refRBSheet = useRef();
    const total = route.params.total
    const cartData = useSelector(state => state.carts.cart)
    const dispatch = useDispatch();

    const submitHandler = () => {

        dispatch(cartActions.clearCart());
        dispatch(orderActions.addOrder(cartData, new Date().toDateString()))
        refRBSheet.current.open()
    }
    return <ScrollView>
        <View >
            <Text style={{ fontFamily: "LatoBold", fontSize: 25, padding: 5, marginBottom: 10 }}>Items</Text>
            <FlatList
                data={cartData}
                renderItem={({ item }) => {
                    return <View>
                        <View style={{ flexDirection: "row" }}>
                            <Image
                                source={{ uri: item.image }}
                                style={{ height: 150, width: 150 }}
                                resizeMode="contain"
                            />
                            <View style={{ margin: 10, flex: 1, justifyContent: "space-around" }}>
                                <Text style={{ fontFamily: "LatoRegular", fontSize: 20, paddingLeft: 8 }}>{item.name}</Text>
                                <Text style={{ fontFamily: "LatoBold", fontSize: 21 }}>₹ {item.price}</Text>
                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text style={{ fontFamily: "LatoRegular", fontSize: 18, alignSelf: "center" }}>Quantity: {item.quantity}</Text>
                                </View>
                            </View>

                        </View>
                        <View style={{ width: width * 0.9, alignSelf: "center", borderWidth: 0.50, borderColor: "lightgrey", marginVertical: 25 }} />

                    </View>

                }}
            />
        </View>
        <View style={{ width: width * 0.9, backgroundColor: "white", alignSelf: "center", justifyContent: "space-around", height: 120, marginTop: 25, borderRadius: 5 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontFamily: "LatoRegular", fontSize: 15, padding: 5 }}>Items:</Text>
                <Text style={{ fontFamily: "LatoRegular", fontSize: 15, padding: 5 }}>₹ {total}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontFamily: "LatoRegular", fontSize: 15, padding: 5 }}>Delivery:</Text>
                <Text style={{ fontFamily: "LatoRegular", fontSize: 15, padding: 5 }}>₹ 50</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 10 }}>
                <Text style={{ fontFamily: "LatoBold", fontSize: 20, padding: 5 }}>Order Total:</Text>
                <Text style={{ fontFamily: "LatoBold", fontSize: 20, padding: 5 }}>₹ {total + 50}</Text>
            </View>
        </View>
        <View style={{ width: width * 0.9, backgroundColor: "white", alignItems: "center", justifyContent: "space-around", alignSelf: "center", height: 35, marginTop: 25, flexDirection: "row", borderRadius: 5 }}>
            <Text style={{ fontFamily: "LatoRegular", fontSize: 18, padding: 5 }}>Payment Type:</Text>
            <Text style={{ fontFamily: "LatoBold", fontSize: 18, padding: 5 }}>Cash on Delivery</Text>
        </View>
        <Pressable onPress={submitHandler}>
            <View style={{ width: width * 0.8, height: 50, backgroundColor: "purple", alignItems: "center", justifyContent: "center", alignSelf: "center", borderRadius: 10, marginVertical: 75 }}>
                <Text style={{ color: "white", fontFamily: "MontserratBold", fontSize: 16 }}>Place Order</Text>
            </View>
        </Pressable>
        <RBSheet
            ref={refRBSheet}
            closeOnDragDown={false}
            closeOnPressMask={false}
            onClose={() => {

                navigation.navigate('CartScreen')
            }}
            customStyles={{
                wrapper: {
                    backgroundColor: "rgba(0,0,0,0.8)"
                },
                draggableIcon: {
                    backgroundColor: "#fff"
                }
            }}
        >
            <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                <Text style={{ fontFamily: "LatoBold", fontSize: 20, marginVertical: 10 }}>Your Order has been placed</Text>
                <Text style={{ fontFamily: "LatoBold", fontSize: 20, marginVertical: 10 }}>Thank you for shopping with us!!</Text>
                <Pressable>
                    <Pressable onPress={() => navigation.navigate('CartScreen')}>
                        <View style={{ width: width * 0.8, height: 50, backgroundColor: "purple", alignItems: "center", justifyContent: "center", alignSelf: "center", borderRadius: 10, marginVertical: 25 }}>
                            <Text style={{ color: "white", fontFamily: "MontserratBold", fontSize: 16 }}>Continue Shopping</Text>
                        </View>
                    </Pressable>

                </Pressable>
            </View>
        </RBSheet>
    </ScrollView>
}

const RBSheetFun = () => {
    return
}
export default OrderDetailScreen