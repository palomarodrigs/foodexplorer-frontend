import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  margin-bottom: 8px;
  border-radius: 5px;

  > input {
    width: 100%;
    height: 56px;
    padding: 12px;

    border-radius: 5px;

    border: 0;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  > svg {
    margin-left: 16px;
  }
`
