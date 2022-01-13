import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen';
import Login from '../screens/Login';
import Signup from '../screens/Signup';


const MainNav = createNativeStackNavigator();
const AuthNav = createNativeStackNavigator();

const Auth = () => {
    return <AuthNav.Navigator screenOptions={{ headerShown: false }}>
        <AuthNav.Screen name="Login" component={Login} />
        <AuthNav.Screen name="Signup" component={Signup} />
    </AuthNav.Navigator>

}
const Navigator = () => {
    return (
        <NavigationContainer>
            <MainNav.Navigator screenOptions={{ headerShown: false }}>
                <MainNav.Screen name="auth" component={Auth} />
                <MainNav.Screen name="Home" component={HomeScreen} />
            </MainNav.Navigator>
        </NavigationContainer>
    )
}

export default Navigator