import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  margin-bottom: 8px;
  border-radius: 5px;

  > input {
    height: 56px;
    padding: 12px;

    margin-left: 16px;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }

  > svg {
    margin-left: 16px;
  }
`
