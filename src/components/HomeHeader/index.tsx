import { Avatar, Container, Logo } from './styles'

import logoImage from '@assets/Logo.png'
import avatar from '@assets/avatar.png'

export function HomeHeader() {
  return (
    <Container>
      <Logo source={logoImage} />

      <Avatar source={avatar} />
    </Container>
  )
}
