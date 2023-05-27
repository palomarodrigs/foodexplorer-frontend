import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  > main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px;

     .cart {
      display: flex;
      flex-direction: column;
      gap: 32px;

      h2 {
        font-weight: 500;
        font-size: 32px;
      }

      p {
        font-weight: 500;
        font-size: 20px;
      }

      .advance {
        width: 275px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

   > .cart-empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      margin: 180px auto;

      p {
        text-align: center;
        font-size: 18px;
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
      }

      a {
        display: flex;
        align-items: center;
        gap: 2px;
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.CAKE_100};
      }
    }

    @media (min-width: 1143px) {
      padding: 0 140px;

      > .cart {
        gap: 24px;

        h2 {
          margin: 34px 0 0;
        }
        .advance {
          display: none;
        }
      }

      .cart-empty {
      gap: 13px;
    }

      > .payment {
        display: none;
      }
    }

    @media (min-width: 768px) and (max-width: 1143px) {
      justify-content: center;
      margin: 34px 0 155px;

      main {
        padding: 55px;
        /* display: flex; */
      }

      .cart {
        h2 {
          margin: 0 0 48px;
        }

        .advance {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 275px;

          margin-top: 47px;
        }
      }

      > .payment {
        display: none;
      }
    }
  }
`
