import styled from 'styled-components'

export const Container = styled.div`
  .title {
    font-weight: 500;
    font-size: 32px;

    margin: 47px 0 23px;
  }

  .swiper {
    width: 1122px;
    background-color: red;
  }

  .title:nth-child(1) {
    margin: 62px 0 23px;
  }

  .swiper:last-child {
    margin-bottom: 47px;
  }

  .swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 462px;

    padding: 24px;
    gap: 15px;

    border: ${({ theme }) => theme.COLORS.DARK_300};
    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.DARK_300};

    .favorite {
      position: fixed;
      top: 16px;
      right: 18px;

      svg {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
      }
    }

    > img {
      width: 176px;
    }

    > h2 {
      font-weight: 700;
      font-size: 24px;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    > p {
      font-family: 'Roboto';
      text-align: center;
      font-weight: 400;
      font-size: 14px;

      color: ${({ theme }) => theme.COLORS.LIGHT_200};
    }

    > span {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 32px;

      margin-bottom: 15px;

      color: ${({ theme }) => theme.COLORS.CAKE};
    }

    .btns {
      display: flex;
      align-items: center;
      gap: 18px;
    }
  }

  .swiper-button-prev {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .swiper-button-next {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  @media (max-width: 480px) {
    .title {
      font-size: 18px;
    }

    .swiper {
      width: 210px;
      height: 341px;
    }

    .swiper-slide {
      /* width: 210px; */
      height: 292px;

      .favorite {
        right: 16px;
      }

      img {
        width: 88px;
      }

      h2 {
        font-weight: 500;
        font-size: 14px;
      }

      p {
        display: none;
      }

      span {
        font-size: 16px;
        margin: 0;
      }

      .btns {
        flex-direction: column;

        .include {
          width: 162px;
          height: 32px;

          font-size: 14px;
        }
      }
    }

    .swiper-button-prev {
      display: none;
    }

    .swiper-button-next {
      display: none;
    }
  }
`
