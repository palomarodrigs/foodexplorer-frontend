import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled(Link)`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 24px;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > svg {
    width: 700px;

    margin: 0 8px;
  }
`
