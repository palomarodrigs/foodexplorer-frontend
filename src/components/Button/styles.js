import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 56px;

  font-weight: 500;
  padding: 0 16px;

  border: 0;
  border-radius: 5px;

  &:disabled {
    opacity: 0.5;
  }

  > svg {
    margin: 0 8px;
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.RED_200};
`
