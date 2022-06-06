import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'

const Tab = createBottomTabNavigator()

export default props => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: 'blue',
      tabBarShowLabel: true,
      headerShown: false,
      tabBarLabelStyle: {
        fontSize: 15,
      },
      tabBarIcon: ({ focused, color, size }) => {
        let iconName
        // Ionicons
        // switch (route.name) {
        //   case 'TelaA':
        //     iconName = focused
        //       ? 'ios-information-circle'
        //       : 'ios-information-circle-outline'
        //     break
        //   case 'TelaB':
        //     iconName = focused
        //       ? 'ios-information-circle'
        //       : 'ios-information-circle-outline'
        //     break
        //   case 'TelaC':
        //     iconName = focused
        //       ? 'ios-list-circle-sharp'
        //       : 'ios-list-circle-outline'
        //     break
        // }

        // MaterialIcons
        switch (route.name) {
          case 'TelaA':
            iconName = 'home'
            break
          case 'TelaB':
            iconName = 'public'
            break
          case 'TelaC':
            iconName = 'logout'
            break
        }

        return (
          // <Ionicons
          //   name={iconName}
          //   size={size}
          //   color={color}
          // />
          <MaterialIcons
            name={iconName}
            size={size}
            color={color}
          />
        )
      },
    })}
    initialRouteName="TelaA">
    <Tab.Screen
      name="TelaA"
      component={TelaA}
      options={{ title: 'Inicial' }}
    />
    <Tab.Screen
      name="TelaB"
      component={TelaB}
      options={{ title: 'Meio' }}
    />
    <Tab.Screen
      name="TelaC"
      component={TelaC}
      options={{ title: 'Final' }}
    />
  </Tab.Navigator>
)
