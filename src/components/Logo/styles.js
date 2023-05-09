import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  white-space: nowrap;
  margin: 0 auto;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > div {
    display: flex;

    img {
      width: 24px;
      margin-right: 10px;
    }

    h1 {
      font-size: 21px;
    }
  }

  > span {
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.CAKE_100};
  }

  @media (min-width: 1143px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0;
    margin: 0;

    > div {
      display: flex;
      img {
        width: 25px;
        margin-right: 10px;
      }
    }
  }
`
