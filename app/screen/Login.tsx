import React, { useState } from 'react'

import { TextInput } from 'react-native-paper'
import { StyleSheet } from 'react-native'

type Props = {
  label: string
}

const Login: React.FC<Props> = ({label}: Props) => {

  const [text, setText] = useState<string>("")

  return (
    <TextInput 
      label={label}
      value={text}
      onChangeText={text => setText(text)}
    />
  )
}

export default Login;