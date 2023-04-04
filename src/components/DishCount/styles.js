import styled from 'styled-components'

export const Container = styled.button`
  img {
    width: 32px;
  }
  .circle {
    width: 20px;
    height: 20px;

    position: relative;
    right: -20px;
    top: -40px;
    z-index: 1;

    /* pointer-events: none; */

    display: flex;
    justify-content: center;
    border-radius: 99px;
    background: ${({ theme }) => theme.COLORS.RED_200};

    span {
      font-size: 14px;
      font-weight: 500;
      color: white;
    }
  }
`
