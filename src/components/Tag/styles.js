import styled from 'styled-components'

export const Container = styled.span`
  font-size: 14px;
  font-weight: 500;

  padding: 8px 16px;
  margin-right: 8px;

  border-radius: 8px;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
`
