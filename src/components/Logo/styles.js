import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
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
`
