import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import cartReducer from './src/store/reducers/cart'
import orderReducer from './src/store/reducers/order'
import Navigator from './src/navigation/Navigator'
import { loadAsync } from 'expo-font'
import { ActivityIndicator, View } from 'react-native'

const rootreducer = combineReducers({
  carts: cartReducer,
  order: orderReducer
})

const store = createStore(rootreducer)

const App = () => {
  const [fontLoaded, setfontLoaded] = useState(false)
  const loadFonts = async () => {
    await loadAsync({
      LatoRegular: require('./assets/fonts/Lato-Regular.ttf'),
      LatoBold: require('./assets/fonts/Lato-Bold.ttf'),
      LatoLight: require('./assets/fonts/Lato-Light.ttf'),
      MontserratLight: require('./assets/fonts/Montserrat/Montserrat-Light.ttf'),
      MontserratRegular: require('./assets/fonts/Montserrat/Montserrat-Regular.ttf'),
      MontserratBold: require('./assets/fonts/Montserrat/Montserrat-SemiBold.ttf')
    })
    setfontLoaded(true);
  }
  useEffect(() => {
    loadFonts();

  }, [fontLoaded])

  return <Provider store={store}><View style={{ flex: 1 }}>
    {
      fontLoaded ? <Navigator /> : <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}><ActivityIndicator /></View>
    }
  </View>
  </Provider>
}

export default App

