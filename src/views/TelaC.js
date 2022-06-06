import React from 'react'
import TextoCentral from '../components/TextoCentral'

export default props => {
  const rota = props.route
  const numero =
    rota && rota.params && rota.params.numero ? props.route.params.numero : 0
  return <TextoCentral corFundo="#9932CD">Tela C - {numero}</TextoCentral>
}
