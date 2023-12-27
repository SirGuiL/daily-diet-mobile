import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

import { PrimaryOrSecondaryType } from 'src/@types/buttonType'

type Props = {
  type: PrimaryOrSecondaryType
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;

  border-radius: 6px;

  padding: 16px 24px;

  ${({ theme, type }) => css`
    background-color: ${type === 'primary'
      ? theme.COLORS.GRAY_2
      : theme.COLORS.WHITE};
    border: 1px solid
      ${type === 'primary' ? theme.COLORS.GRAY_2 : theme.COLORS.GRAY_1};
  `}
`

export const ButtonLabel = styled.Text<Props>`
  ${({ theme, type }) => css`
    color: ${type === 'primary' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
  `}
`

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 18,
  color: type === 'primary' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1,
}))``
