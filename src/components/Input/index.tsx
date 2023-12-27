import { TextInputProps } from 'react-native'
import { Container } from './styles'

type Props = TextInputProps & {
  textarea?: boolean
}

export function Input({ textarea, ...rest }: Props) {
  return (
    <Container
      textarea={textarea}
      multiline={textarea}
      style={textarea && { textAlignVertical: 'top' }}
      {...rest}
    />
  )
}
