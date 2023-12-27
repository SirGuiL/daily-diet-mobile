import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 24px;

  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.25);
`

export const ModalContent = styled.View`
  width: 100%;

  padding: 40px 24px 24px;
  border-radius: 8px;
  gap: 32px;

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

export const ButtonsContainer = styled.View`
  width: 100%;

  flex-direction: row;
  gap: 12px;
`
