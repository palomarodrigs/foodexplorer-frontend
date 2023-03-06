import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 104px;

  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  gap: 32px;

  padding: 24px 123px;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};

  .logo {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    h1 {
      font-size: 24px;
      font-weight: 700;

      white-space: nowrap;
    }

    img {
      width: 30px;
      margin-right: 10px;
    }
  }

  .search {
    input {
      width: 600px;
    }
  }

  .content {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  button {
    width: 216px;
  }

  .logout {
    width: 30px;

    > svg {
      font-size: 30px;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  a {
    /* width: 70px; */

    img {
      width: 70px;
      border-radius: 50%;
      object-fit: cover;

      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  .menu-mobile {
    display: none;
  }

  .receipt-mobile {
    display: none;
  }

  @media (max-width: 480px) {
    height: 114px;

    display: flex;
    align-items: center;
    gap: 32px;

    padding: 64px 28px;

    .menu-mobile {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 0;

      background-color: transparent;
    }

    .logo {
      h1 {
        font-size: 21px;
      }

      img {
        width: 24px;
      }
    }

    .search {
      display: none;
    }

    .content {
      display: none;
    }

    .receipt-mobile {
      display: flex;
      justify-content: center;

      > img {
        width: 30px;
      }
    }
  }
`
