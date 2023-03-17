import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  height: 77px;
  /* 
  bottom: 0;
  position: absolute; */

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 24px 140px;

  background: ${({ theme }) => theme.COLORS.DARK_800};

  > .logo {
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    h1 {
      font-size: 24px;
      margin-left: 10px;

      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    img {
      width: 30px;
      height: 30px;
    }
  }

  > p {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 29px 27px;

    .logo {
      h1 {
        font-size: 15px;
      }

      img {
        width: 22px;
      }
    }

    > p {
      font-size: 12px;
    }
  }
`
