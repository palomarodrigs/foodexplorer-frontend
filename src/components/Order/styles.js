import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > .orders {
    display: flex;
    align-items: center;

    margin-bottom: 42px;

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
`
