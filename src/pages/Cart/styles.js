import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > main {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 140px;
    margin-bottom: 67px;

    > .orders {
      display: flex;
      flex-direction: column;

      h2 {
        font-weight: 500;
        font-size: 32px;

        margin: 34px 0 48px;
      }

      p {
        font-weight: 500;
        font-size: 20px;
      }

      .advance {
        display: none;
      }
    }

    > .payment {
      display: flex;
      flex-direction: column;

      h2 {
        margin-bottom: 32px;
      }

      .method-payment {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 530px;
        height: 445px;

        border-radius: 8px;
        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_500};

        .options {
          display: flex;

          .pix-option {
            border-radius: 8px 0px 0px 0px;
          }

          .creditcard-option {
            border-radius: 0px 8px 0px 0px;
          }

          button {
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Roboto';

            width: 265px;
            height: 81px;

            margin-bottom: 44px;

            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_500};
            background-color: ${({ theme }) => theme.COLORS.DARK_700};

            img {
              width: 24px;
              margin-right: 8px;
            }
          }
        }
      }
    }

    @media (max-width: 480px) {
      padding: 32px;

      > .orders {
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
