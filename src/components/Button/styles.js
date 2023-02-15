import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.RED_200};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  height: 56px;
  border: 0;
  padding: 0 16px;
  border-radius: 5px;
  font-weight: 500;
  &:disabled {
    opacity: 0.5;
  }
`
