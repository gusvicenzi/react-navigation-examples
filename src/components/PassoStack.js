import React from 'react'
import { View, Text, Button } from 'react-native'

export default props => {
  return (
    <View
      style={{
        flexGrow: 1,
      }}>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        {props.voltar ? (
          <Button
            title="Voltar"
            onPress={() => {
              props.navigation.goBack()
            }}
          />
        ) : (
          false
        )}
        {props.avancar ? (
          <Button
            title="Avançar"
            // onPress={() => {
            //   props.navigation.push(props.avancar, {
            //     numero: parseInt(Math.random() * 100),
            //   })
            // }}
            onPress={() => {
              props.navigation.navigate(props.avancar, props.avancarParams)
              // props.navigation.push(props.avancar, props.avancarParams)
            }}
          />
        ) : (
          false
        )}
      </View>
      <View
        style={{
          flexGrow: 1,
        }}>
        {props.children}
      </View>
    </View>
  )
}
