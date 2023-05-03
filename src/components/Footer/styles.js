import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  height: 77px;

  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 29px 27px;
  background: ${({ theme }) => theme.COLORS.DARK_800};

  > .logo {
    display: flex;
    align-items: center;
    gap: 6px;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    h1 {
      font-size: 15px;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    img {
      width: 22px;
    }
  }

  > p {
    font-size: 12px;
  }

  @media (min-width: 1143px) {
    padding: 24px 123px;
    .logo {
      h1 {
        font-size: 24px;
        margin-left: 10px;
      }

      img {
        width: 30px;
        height: 30px;
      }
    }

    > p {
      font-size: 14px;
    }
  }

  @media (min-width: 768px) and (max-width: 1143px) {
    .logo {
      gap: 6px;
    }
  }
`
