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
  animation: topdown 700ms;

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
      display: flex;
      justify-content: center;
      align-items: center;
      width: 216px;
      margin: 0;

      svg {
        width: 28px;
      }
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
    justify-content: space-between;
    padding: 64px 27px;
  }

  @keyframes topdown {
  0% {
    opacity: 0;
    transform: translateY(-15px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
`
