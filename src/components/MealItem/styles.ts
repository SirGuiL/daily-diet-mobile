import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

type Props = {
  inDiet: boolean
}

export const Container = styled(TouchableOpacity)`
  padding: 14px 12px;

  width: 100%;

  flex-direction: row;
  align-items: center;
  gap: 12px;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
`

export const Time = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
  `}
`

export const Divider = styled.View`
  width: 2px;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_4};
`

export const Name = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}

  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const Status = styled.View<Props>`
  background-color: ${({ theme, inDiet }) =>
    inDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  width: 14px;
  height: 14px;
  border-radius: 50px;
`
