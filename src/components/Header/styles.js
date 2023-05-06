import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 114px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;

  padding: 64px 27px;
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

  .logo {
    margin: 0 auto;
    h1 {
      font-size: 21px;
    }

    img {
      width: 24px;
    }
  }

  button {
    margin-top: 10px;
  }

  .search {
    display: none;
  }

  nav {
    display: none;
  }

  .btn-new,
  .btn-cart {
    display: none;
  }

  .profile {
    display: none;
  }

  .logout {
    display: none;
  }

  @media (min-width: 1143px) {
    height: 104px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;

    white-space: nowrap;
    padding: 24px 100px;

    a {
      color: ${({ theme }) => theme.COLORS.TITLE_200};
      font-weight: 400;
      font-size: 16px;
    }

    .btn-new,
    .btn-cart {
      display: block;
      width: 180px;
      margin: 0;
    }

    .search {
      display: block;
      margin-top: 8px;

      input {
        width: 350px;
      }
    }

    nav {
      display: block;
      ul {
        display: flex;
        align-items: center;
        gap: 32px;
        list-style: none;

        #favorites,
        #history {
          font-family: 'Roboto';
          font-size: 16px;
          color: ${({ theme }) => theme.COLORS.TITLE_200};
        }
      }
    }

    .profile {
      display: block;
      width: 60px;
      height: 60px;
      padding: 2px;

      border: 2px solid ${({ theme }) => theme.COLORS.LIGHT_100};
      border-radius: 100%;
      object-fit: cover;
    }

    .logout {
      display: block;
      font-size: 32px;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    .menu-mobile {
      display: none;
    }

    .cart-mobile {
      display: none;
    }
  }

  @media (min-width: 768px) and (max-width: 1143px) {
    gap: 0;

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

    nav {
      display: none;
    }

    .btn-new,
    .btn-cart {
      display: none;
    }

    .profile {
      display: none;
    }

    .logout {
      display: none;
    }
  }
`
