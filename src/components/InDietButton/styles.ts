import { PrimaryOrSecondaryType } from 'src/@types/buttonType'
import styled, { css } from 'styled-components/native'

type Props = {
  type: PrimaryOrSecondaryType
  selected: boolean
}

export const Container = styled.TouchableOpacity<Props>`
  flex: 1;

  padding: 16px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border-radius: 6px;

  ${({ theme, type, selected }) => css`
    background-color: ${!selected
      ? theme.COLORS.GRAY_6
      : type === 'primary'
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT};

    border: 1px solid
      ${!selected
        ? theme.COLORS.GRAY_6
        : type === 'primary'
          ? theme.COLORS.GREEN_DARK
          : theme.COLORS.RED_DARK};
  `}
`

export const Dot = styled.View<Props>`
  width: 8px;
  height: 8px;

  border-radius: 10px;

  background-color: ${({ theme, type }) =>
    type === 'primary' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

export const ButtonText = styled.Text``
