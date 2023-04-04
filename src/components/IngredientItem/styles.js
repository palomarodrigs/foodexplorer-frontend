import styled from 'styled-components'

export const Container = styled.div`
  width: 118px;
  height: 32px;
  display: flex;

  padding: 4px 8px;

  border-radius: 10px;
  background-color: red;

  border: ${({ theme, isNew }) => (isNew ? `1px dashed ${theme.COLORS.LIGHT_300}` : 'none')};
  background-color: ${({ theme, isNew }) => (isNew ? 'transparent' : theme.COLORS.LIGHT_500)};

  > button {
    display: flex;
    align-items: center;

    .button-delete {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    .button-add {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }

  > input {
    font-family: 'Roboto';
    width: 100%;
    padding: 10px 16px;

    border: none;
    border-radius: 8px;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.TITLE_200};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.RED_100};
    }
  }
`
