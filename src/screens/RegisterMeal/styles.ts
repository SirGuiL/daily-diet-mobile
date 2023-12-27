import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`

export const Content = styled.View`
  flex: 1;

  border-radius: 20px 20px 0px 0px;
  padding: 40px 24px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`
