import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacityProps } from 'react-native'

import { PrimaryOrSecondaryType } from 'src/@types/buttonType'

import { ButtonLabel, Container, Icon } from './styles'
import { ReactNode } from 'react'

type Props = TouchableOpacityProps & {
  type?: PrimaryOrSecondaryType
  icon?: keyof typeof MaterialIcons.glyphMap | ReactNode
  text: string
}

export function Button({ type = 'primary', icon, text, ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      {typeof icon === 'string' ? (
        <Icon name={icon} type={type} />
      ) : (
        icon && icon
      )}
      <ButtonLabel type={type}>{text}</ButtonLabel>
    </Container>
  )
}
