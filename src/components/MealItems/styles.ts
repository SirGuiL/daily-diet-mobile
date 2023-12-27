import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  margin-top: 32px;

  width: 100%;

  align-items: flex-start;
  gap: 8px;
`

export const DayTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}

  line-height: 23.4px;
`
