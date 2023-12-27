import { TextInput } from 'react-native'
import styled from 'styled-components/native'

type Props = {
  textarea: boolean
}

export const Container = styled(TextInput)<Props>`
  width: 100%;
  padding: 14px;

  ${({ textarea }) => textarea && 'height: 116px;'}

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
`
