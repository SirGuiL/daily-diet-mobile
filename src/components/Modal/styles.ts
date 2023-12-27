import styled, { css } from 'styled-components/native'

export const Container = styled.Modal`
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  flex: 1;

  align-items: center;
  justify-content: center;
`

export const ModalContent = styled.View`
  width: 80%;

  padding: 40px 24px 24px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const ModalTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}

  text-align: center;
`
