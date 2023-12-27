import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 24px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;

  border-radius: 40px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_2};
`
