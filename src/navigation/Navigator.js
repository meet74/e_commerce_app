import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen'
import OrderListScreen from '../screens/OrderList'
import ProductDetailScreen from '../screens/ProductDetail'
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import { Entypo, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { View } from 'react-native'
import OrderDetailScreen from '../screens/OrderDetailScreen';



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
    return <OrderNav.Navigator screenOptions={{ headerTitle: "Amazon", headerTintColor: "white", headerStyle: { backgroundColor: "purple" } }}>
        <OrderNav.Screen name="CartScreen" component={CartScreen} />
        <OrderNav.Screen name="OrderDetail" component={OrderDetailScreen} />
    </OrderNav.Navigator>
}

const Order = () => {
    return <OrderDetailNav.Navigator screenOptions={{ headerTitle: "Amazon", headerTintColor: "white", headerStyle: { backgroundColor: "purple" } }}>
        <OrderDetailNav.Screen name="OrderDetail" component={OrderListScreen} />
    </OrderDetailNav.Navigator>
}
const TabBar = () => {
    return <TabNav.Navigator screenOptions={{
        headerShown: false, tabBarShowLabel: false,

    }} >
        <TabNav.Screen name="Home" component={Main} options={{
            tabBarIcon: ({ focused }) => {
                if (focused) {
                    return <MaterialCommunityIcons name="home-variant" size={24} color="purple" />
                } else {
                    return <MaterialCommunityIcons name="home-variant-outline" size={24} color="purple" />
                }
            }
        }} />
        <TabNav.Screen name="Cart" component={Cart} options={{
            tabBarIcon: ({ focused }) => {
                if (focused) {
                    return <Ionicons name="cart" size={24} color="purple" />
                } else {
                    return <Ionicons name="cart-outline" size={24} color="purple" />
                }
            }
        }} />
        <TabNav.Screen name="Order" component={Order} options={{
            tabBarIcon: ({ focused }) => {
                return <Entypo name="list" size={24} color="purple" />
            }
        }} />
    </TabNav.Navigator>
}
const Main = () => {
    return <MainNav.Navigator screenOptions={{ headerTitle: "Amazon", headerTintColor: "white", headerStyle: { backgroundColor: "purple" } }}>
        <MainNav.Screen name="Home" component={HomeScreen} />
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