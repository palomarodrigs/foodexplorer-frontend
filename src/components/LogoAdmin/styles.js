import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  > .logo {
    display: flex;
    align-items: center;
    white-space: nowrap;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    > h1 {
      font-size: 24px;
    }

    > img {
      width: 30px;
      margin-right: 10px;
    }
  }

  > span {
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.CAKE_100};
  }

  @media (min-width: 768px) and (max-width: 1143px) {
    flex-direction: row;
    align-items: center;
    gap: 8px;

    margin-right: 30px;
  }
`
