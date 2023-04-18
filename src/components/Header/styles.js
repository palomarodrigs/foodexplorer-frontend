import styled from 'styled-components'

export const Container = styled.div`
  height: 114px;

  display: flex;
  align-items: center;
  gap: 55px;

  padding: 64px 28px;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};

  .menu-mobile {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0;

    svg {
      width: 24px;
    }
  }

  button {
    margin-top: 10px;
  }

  .logo {
    h1 {
      font-size: 21px;
    }

    img {
      width: 24px;
    }
  }

  .receipt-mobile {
    display: flex;
    justify-content: center;
    width: 32px;

    > img {
      width: 30px;
    }
  }

  #favorites,
  #history {
    display: none;
  }

  .search {
    display: none;
  }

  .btns {
    display: none;
  }

  .content {
    display: none;
  }

  @media (min-width: 900px) {
    width: 100%;
    height: 104px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
    gap: 32px;

    padding: 24px 123px;

    a {
      color: ${({ theme }) => theme.COLORS.TITLE_200};
      font-weight: 400;
      font-size: 16px;
    }

    button {
      margin: 0;
    }

    .search {
      margin-top: 8px;

      input {
        width: 350px;
      }
    }

    .btns {
      display: flex;
      gap: 24px;

      a {
        font-family: 'Roboto';
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.TITLE_200};
      }
    }

    .content {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    button {
      /* width: 147px; */
    }

    .logout {
      width: 25px;

      > svg {
        font-size: 25px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }

    a {
      .profile {
        width: 64px;
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

    #favorites,
    #history {
      display: block;
    }

    .search {
      display: block;
    }

    .cart-mobile {
      display: none;
    }
  }

  @media (min-width: 600px) and (max-width: 900px) {
    gap: ${({ isAdmin }) => (isAdmin ? 50 : 0)};
    justify-content: space-between;

    .menu-mobile {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 0;
      background-color: transparent;

      svg {
        width: 24px;
      }
    }

    .logo {
      /* position: ${({ isAdmin }) => (isAdmin ? 'fixed' : 'static')};
      left: ${({ isAdmin }) => (isAdmin ? 55 : 0)}; */

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

    .btns {
      display: none;
    }

    .content {
      display: none;
    }
    /* 
    button {
      width: 26px;
    } */

    .receipt-mobile {
      display: flex;
      justify-content: center;
      width: 32px;

      > img {
        width: 30px;
      }
    }

    #favorites,
    #history {
      display: none;
    }
  }
`
