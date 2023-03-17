import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 104px;

  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  gap: 15px;

  white-space: nowrap;

  padding: 24px 140px;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};

  .search {
    margin-top: 8px;

    input {
      width: 500px;
    }
  }

  .btns {
    display: flex;
    gap: 24px;

    a {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.TITLE_200};
    }
  }

  .content {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  button {
    width: 147px;
  }

  .logout {
    width: 30px;

    > svg {
      font-size: 30px;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  a {
    .profile {
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

    .btns {
      display: none;
    }

    .content {
      display: none;
    }

    .receipt-mobile {
      display: flex;
      justify-content: center;
      width: 32px;

      > img {
        width: 30px;
      }
    }
  }
`
