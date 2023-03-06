import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 17px;

  button {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  span {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 20px;
  }

  @media (max-width: 480px) {
    justify-content: center;
    /* margin-bottom: 54px; */
  }
`
