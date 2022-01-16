import Reac, { useState, useEffect } from 'react'
import { View, Text, Image, Pressable, Dimensions, FlatList, ToastAndroid } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useSelector, useDispatch } from 'react-redux'
import * as cartActions from '../store/actions/cart'

const { width, height } = Dimensions.get('screen')
const CartScreen = (props) => {
    const [total, setTotal] = useState(0);
    const cartData = useSelector(state => state.carts.cart)
    const calculateTotal = (cartArray) => {
        let total = 0;
        for (let index = 0; index < cartArray.length; index++) {
            const element = cartArray[index];
            const price = parseInt(element.price) * element.quantity
            total += price;
        }
        return total;
    }
    useEffect(() => {
        const totalCost = calculateTotal(cartData);
        setTotal(totalCost)
        //setcartData(cartData)
    }, [cartData])
    const submitHandler = () => {
        if (total === 0) {
            ToastAndroid.show('Please add some item in Cart', ToastAndroid.LONG)
        } else {
            props.navigation.navigate('OrderDetail', {
                total: total
            })
        }
    }
    const dispatch = useDispatch();
    const deleteHandler = (id) => {
        dispatch(cartActions.deletefromcart(id))
        ToastAndroid.show('Item Deleted', ToastAndroid.LONG)
    }
    return <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ marginVertical: 15 }}>
            <Text style={{ fontSize: 19, paddingLeft: 8 }}>Subtotal  <Text style={{ fontFamily: "LatoBold", fontSize: 22 }}>₹ {total}</Text></Text>
            <Pressable onPress={submitHandler}>
                <View style={{ width: width * 0.8, height: 50, backgroundColor: "purple", alignItems: "center", justifyContent: "center", alignSelf: "center", borderRadius: 10, marginVertical: 25 }}>
                    <Text style={{ color: "white", fontFamily: "MontserratBold", fontSize: 16 }}>Proceed to Buy</Text>
                </View>
            </Pressable>
        </View>
        <FlatList
            data={cartData}
            renderItem={({ item }) => {

                return <View >
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
                                <Pressable onPress={() => deleteHandler(item.id)}>
                                    <View style={{ height: 35, width: 100, backgroundColor: "red", borderRadius: 5, alignItems: "center", justifyContent: "center", alignSelf: "flex-end", flexDirection: "row" }}>
                                        <Text style={{ fontFamily: "LatoRegular", color: "white", paddingRight: 5 }}>Delete</Text>
                                        <MaterialCommunityIcons name="delete-empty-outline" size={22} color="white" />
                                    </View>
                                </Pressable>
                            </View>
                        </View>

                    </View>
                    <View style={{ width: width * 0.9, alignSelf: "center", borderWidth: 0.50, borderColor: "lightgrey", marginTop: 25 }} />
                </View>
            }}
        />

    </View>
}

export default CartScreen
