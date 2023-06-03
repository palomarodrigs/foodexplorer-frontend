import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 17px;

  margin-bottom: 20px;

  button {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  span {
    font-family: 'Roboto';
    font-size: 20px;
  }

  @media (min-width: 1143px) {
    margin: 0;

    span {
      font-weight: 700;
    }
  }
`
