import styled from 'styled-components'

export const Container = styled.div`
  width: 364px;

  display: flex;
  flex-direction: column;

  margin-top: 16px;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  border-radius: 8px;

  @media (min-width: 900px) {
    width: 1043px;
  }
`

export const TextareaInput = styled.textarea`
  width: 364px;
  height: 172px;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;

  resize: none;
  padding: 14px;

  border: 0;
  border-radius: 8px;

  background: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  @media (min-width: 900px) {
    width: 1043px;
  }
`
