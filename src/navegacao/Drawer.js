import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
// import Ionicons from 'react-native-vector-icons/Ionicons'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'

const Drawer = createDrawerNavigator()

export default props => {
  return (
    <Drawer.Navigator initialRouteName="TelaB">
      <Drawer.Screen
        name="TelaA"
        component={TelaA}
      />
      <Drawer.Screen
        name="TelaB"
        component={TelaB}
      />
      <Drawer.Screen
        name="TelaC"
        component={TelaC}
      />
    </Drawer.Navigator>
  )
}
