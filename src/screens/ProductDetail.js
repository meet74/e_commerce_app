import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, Image, Dimensions, Pressable, ScrollView, ToastAndroid } from 'react-native'
import { Data } from '../data/Dummy_data'
import * as cartActions from '../store/actions/cart'

const { height, width } = Dimensions.get('screen')
const ProductDetailScreen = ({ navigation, route }) => {
    const [quantity, setquantity] = useState(1)
    const id = route.params
    const product = Data.find(prod => prod.id == id);
    const dispatch = useDispatch();
    const cartData = useSelector(state => state.carts.cart)
    const submitHandler = () => {
        const isCartExist = cartData.find(cd => cd.id === id)
        if (isCartExist) {
            dispatch(cartActions.updatecart(id, quantity))
            ToastAndroid.show("Item updated to cart", ToastAndroid.LONG);
        } else {
            dispatch(cartActions.addtocart(id, product.name, product.price, quantity, product.image))
            ToastAndroid.show("Item added to cart", ToastAndroid.LONG);
        }
    }

    return <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <Image
            source={{ uri: product.image }}
            style={{ height: height * 0.40, width: width }}
            resizeMode="contain"
        />
        <Text style={{ fontFamily: "LatoBold", fontSize: 24, margin: 8 }}>{product.name}</Text>
        <Text style={{ fontFamily: "MontserratBold", fontSize: 20, marginVertical: 15, marginLeft: 8 }}>₹ {product.price}</Text>
        <Text style={{ fontFamily: "MontserratRegular", fontSize: 15, margin: 5 }}>{product.description}</Text>
        <View>
            <Text style={{ fontFamily: "MontserratBold", fontSize: 18, marginTop: 15, marginLeft: 5 }}>Quantity</Text>
            <View style={{ flexDirection: "row", marginVertical: 10 }}>
                <Pressable onPress={() => quantity > 1 ? setquantity(quantity - 1) : null}>
                    <View style={{ borderWidth: 0.5, borderRadius: 10, width: 25, marginHorizontal: 10, height: 25, justifyContent: "center", alignItems: "center", backgroundColor: "lightgrey" }}>
                        <Text>−</Text>
                    </View>
                </Pressable>
                <Text style={{ fontSize: 17 }}>{quantity}</Text>
                <Pressable style={{ borderWidth: 0.5, borderRadius: 10, width: 25, marginHorizontal: 10, height: 25, justifyContent: "center", alignItems: "center", backgroundColor: "lightgrey" }} onPress={() => setquantity(quantity + 1)}>
                    <View>
                        <Text >+</Text>
                    </View>
                </Pressable>
            </View>
        </View>
        <Pressable onPress={submitHandler}>
            <View style={{ width: width * 0.8, height: 50, backgroundColor: "purple", alignItems: "center", justifyContent: "center", alignSelf: "center", borderRadius: 10, marginVertical: 25 }}>
                <Text style={{ color: "white", fontFamily: "MontserratBold", fontSize: 16 }}>Add to Cart</Text>
            </View>
        </Pressable>
    </ScrollView>
}

export default ProductDetailScreen
