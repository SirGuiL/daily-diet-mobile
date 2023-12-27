import { SafeAreaView } from 'react-native-safe-area-context'
import { PrimaryOrSecondaryType } from 'src/@types/buttonType'
import styled, { css } from 'styled-components/native'

type Props = {
  type?: PrimaryOrSecondaryType
}

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ theme, type }) =>
    type === 'primary' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const Content = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  flex: 1;

  align-items: center;
  gap: 23px;

  padding: 33px 24px;
  border-radius: 20px 20px 0px 0px;
`

export const SectionTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const Boxes = styled.View`
  gap: 12px;
`

export const BoxContainer = styled.View`
  flex-direction: row;
  gap: 12px;

  width: 100%;
`

export const Box = styled.View<Props>`
  padding: 16px;

  align-items: center;
  justify-content: center;
  gap: 8px;

  background-color: ${({ theme, type }) =>
    type === 'primary'
      ? theme.COLORS.GREEN_LIGHT
      : type === 'secondary'
        ? theme.COLORS.RED_LIGHT
        : theme.COLORS.GRAY_6};
`

export const BoxNumber = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  text-align: center;
`

export const BoxDescription = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}

  text-align: center;
`
