import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 114px;
  bottom: 77px;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 32px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  animation: swiperight 1s 0.3s backwards;

  #close {
    position: absolute;
    top: 40px;

    display: flex;
    align-items: center;
    gap: 6px;

    font-size: 24px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    animation: topdown 700ms;
  }

  h2 {
    margin-bottom: 32px;
  }

  .content {
    animation: downtop 700ms 200ms reverse backwards;
  }

  .method-payment {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 355px;
    height: 380px;

    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_500};

    .options {
      display: flex;

      .pix {
        border-radius: 8px 0px 0px 0px;
      }

      .credit-card {
        border-radius: 0px 8px 0px 0px;
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Roboto';

        width: 177px;
        height: 81px;
        margin-bottom: 20px;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_500};

        img {
          width: 24px;
          margin-right: 8px;
        }

        :hover {
          background-color: ${({ theme }) => theme.COLORS.DARK_700};
          transition: 0.5s;
        }
      }
    }

    .qrcode img {
      width: 179px;
      height: 179px;
      margin-bottom: 10px;
    }

    .card-fields {
      display: flex;
      flex-direction: column;
      gap: 50px;
      padding: 0;
      margin-bottom: 50px;

      #number-card {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      div {
        width: 300px;
        height: 48px;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

        input {
          width: 300px;
          height: 48px;

          border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
        }
      }

      span {
        margin: 0;
      }

      .container {
        display: flex;
        flex-direction: column;
      }

      .card-wrapper {
        display: flex;
        gap: 15px;

        #validate,
        #code-card {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        div {
          width: 144px;

          #code,
          #date {
            width: 144px;
          }
        }
      }
    }

    .send-payment {
      width: 305px;
    }
  }

  @keyframes topdown {
    0% {
      opacity: 0;
      transform: translateX(-15px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes downtop {
    100% {
      opacity: 0;
      transform: translateX(15px);
    }
  }

  @media (min-width: 1143px) {
    position: static;
    padding: 0;
    background: transparent;

    #close {
      display: none;
    }

    .content {
      animation: none;
    }

    .method-payment {
      width: 530px;
      height: 445px;

      .options button {
        width: 265px;
        height: 81px;
        margin-bottom: 44px;
      }

      .qrcode img {
        width: 215px;
        height: 215px;
      }

      .card-fields {
        div {
          width: 346px;

          input {
            width: 346px;
          }
        }

        .card-wrapper {
          div {
            width: 166px;

            #code,
            #date {
              width: 166px;
            }
          }
        }
      }

      .send-payment {
        width: 348px;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1143px) {
    .content {
      margin: 0 auto;
    }

    #close {
      left: 32px;
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

// export const PaymentContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 24px;

//   padding: 32px;

//   span {
//     font-family: 'Roboto';
//     font-weight: 700;
//     font-size: 20px;
//     color: ${({ theme }) => theme.COLORS.LIGHT_200};
//   }

//   @media (min-width: 1143px) {
//     gap: 50px;

//     span {
//       font-size: 24px;
//     }
//   }
// `
