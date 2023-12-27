import styled, { css } from 'styled-components/native'

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`

export const InputLabel = styled.Text`
  margin-bottom: 4px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`

export const DateTimeContainer = styled.View`
  width: 100%;

  flex-direction: row;
  gap: 20px;

  margin: 24px 0;
`

export const DateTime = styled.View`
  flex: 1;
`

export const InDietContainer = styled.View`
  width: 100%;

  flex-direction: row;
  gap: 8px;

  margin-bottom: 24px;
`
