import { PrimaryOrSecondaryType } from 'src/@types/buttonType'
import styled from 'styled-components/native'

type Props = {
  type: PrimaryOrSecondaryType
}

export const Container = styled.View`
  padding: 8px 16px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_6};

  border-radius: 1000px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const Dot = styled.View<Props>`
  background-color: ${({ theme, type }) =>
    type === 'primary' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};

  width: 8px;
  height: 8px;
  border-radius: 100px;
`

export const BadgeText = styled.Text``
