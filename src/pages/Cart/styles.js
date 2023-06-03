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
    margin-bottom: 100px;

     .cart {
      display: flex;
      flex-direction: column;
      gap: 32px;

      h2 {
        font-weight: 500;
        font-size: 32px;
        animation: topdown 1s 0.3s backwards;
      }

      p {
        font-weight: 500;
        font-size: 20px;
        animation: swipeleft 1s 0.4s backwards;
      }

      .advance {
        width: 275px;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: downtop 1s 0.3s reverse backwards;
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
        animation: swipeleft 1s 0.3s backwards;
      }

      a {
        display: flex;
        align-items: center;
        gap: 2px;
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.CAKE_100};
        animation: swiperight 1s 0.3s backwards;
      }
    }

    @media (min-width: 1143px) {
      padding: 0 140px;

      > .cart {
        gap: 24px;
        animation: swipeleft 1s 0.3s backwards;

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

  @keyframes downtop {
  100% {
    opacity: 0;
    transform: translateY(15px);
  }
}

  @keyframes swipeleft {
  0% {
    opacity: 0;
    transform: translateX(-15px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

  @keyframes swiperight {
  0% {
    opacity: 0;
    transform: translateX(15px);
  }
  
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
`
