import styled from 'styled-components'

export const Container = styled.button`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;

  width: 100%;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: transparent;
`
