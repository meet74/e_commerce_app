import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen'
import OrderConfirmationScreen from '../screens/OrderConfirmation'
import OrderListScreen from '../screens/OrderList'
import ProductDetailScreen from '../screens/ProductDetail'
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import { Entypo, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { View } from 'react-native'



const MainNav = createNativeStackNavigator();
const AuthNav = createNativeStackNavigator();
const TabNav = createBottomTabNavigator();
const OrderNav = createNativeStackNavigator();
const OrderDetailNav = createNativeStackNavigator();

const Auth = () => {
    return <AuthNav.Navigator screenOptions={{ headerShown: false }}>
        <AuthNav.Screen name="Login" component={Login} />
        <AuthNav.Screen name="Signup" component={Signup} />
    </AuthNav.Navigator>

}
const Cart = () => {
    return <OrderNav.Navigator >
        <OrderNav.Screen name="CartScreen" component={CartScreen} />
        <OrderNav.Screen name="OrderConfirm" component={OrderConfirmationScreen} />
    </OrderNav.Navigator>
}

const Order = () => {
    return <OrderDetailNav.Navigator>
        <OrderDetailNav.Screen name="OrderDetail" component={OrderListScreen} />
    </OrderDetailNav.Navigator>
}
const TabBar = () => {
    return <TabNav.Navigator screenOptions={{
        headerShown: false, tabBarShowLabel: false
    }} >
        <TabNav.Screen name="Home" component={Main} options={{
            tabBarIcon: ({ focused }) => {
                if (focused) {
                    return <MaterialCommunityIcons name="home-variant" size={24} color="black" />
                } else {
                    return <MaterialCommunityIcons name="home-variant-outline" size={24} color="black" />
                }
            }
        }} />
        <TabNav.Screen name="Cart" component={Cart} options={{
            tabBarIcon: ({ focused }) => {
                if (focused) {
                    return <Ionicons name="cart" size={24} color="black" />
                } else {
                    return <Ionicons name="cart-outline" size={24} color="black" />
                }
            }
        }} />
        <TabNav.Screen name="Order" component={Order} options={{
            tabBarIcon: ({ focused }) => {
                return <Entypo name="list" size={24} color="black" />
            }
        }} />
    </TabNav.Navigator>
}
const Main = () => {
    return <MainNav.Navigator>
        <MainNav.Screen name="E-Commerce App" component={HomeScreen} />
        <MainNav.Screen name="ProductDetail" component={ProductDetailScreen} />
    </MainNav.Navigator>
}
const Navigator = () => {
    return (
        <NavigationContainer>
            <MainNav.Navigator screenOptions={{ headerShown: false }}>
                {/* <MainNav.Screen name="auth" component={Auth} /> */}
                <MainNav.Screen name="TabBar" component={TabBar} />
            </MainNav.Navigator>
        </NavigationContainer>
    )
}

export default Navigator