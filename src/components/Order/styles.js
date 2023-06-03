import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  animation: swipeleft 1s 0.4s backwards;

  > .orders {
    display: flex;
    align-items: center;


    img {
      width: 72px;
      border-radius: 50%;
    }

    .details {
      display: flex;
      flex-direction: column;

      margin-left: 10px;

      button {
        width: 36px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;

        color: ${({ theme }) => theme.COLORS.RED_100};
      }

      .product {
        display: flex;
        align-items: center;
        gap: 10px;

        span {
          font-weight: 500;
          font-size: 20px;
        }

        p {
          font-family: 'Roboto';
          font-size: 12px;
          color: ${({ theme }) => theme.COLORS.LIGHT_200};
        }
      }
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
`
