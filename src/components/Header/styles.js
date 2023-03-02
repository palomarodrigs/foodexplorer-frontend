import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 104px;

  display: flex;
  align-items: center;
  justify-content: center;
  /* justify-content: space-between; */

  padding: 24px 123px;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};

  .logo {
    display: flex;
    align-items: center;

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
    width: 581px;

    margin: 0 43px;

    input {
      width: 581px;
    }
  }

  button {
    width: 216px;
  }

  .logout {
    width: 30px;
    margin-left: 32px;

    > svg {
      font-size: 30px;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
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

    padding: 64px 28px;

    .logo {
      margin: 0 60px;

      h1 {
        font-size: 21px;
      }

      img {
        width: 24px;
      }
    }

    .menu-mobile {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 0;

      background-color: transparent;
    }

    .search {
      display: none;
    }

    .receipt-mobile {
      display: flex;
      justify-content: center;

      > img {
        width: 30px;
      }
    }

    button {
      display: none;
    }
  }
`
