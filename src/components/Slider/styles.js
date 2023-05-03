import styled from 'styled-components'
import { NewDish } from './../../pages/NewDish/index'

export const Container = styled.div`
  .title {
    font-size: 18px;
    margin-top: 62px;
  }

  .swiper {
    width: 383px;
    height: 292px;
    margin: 24px 0;
  }

  .swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    max-width: 210px;
    height: 292px;

    padding: 24px;
    gap: 15px;

    border: ${({ theme }) => theme.COLORS.DARK_300};
    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.DARK_300};

    .favorite {
      position: fixed;
      top: 16px;
      right: 16px;

      svg {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
      }
    }

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;

      > img {
        width: 88px;
      }

      > h2 {
        font-weight: 500;
        font-size: 14px;
        white-space: nowrap;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }

    > p {
      display: none;
    }

    > span {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 16px;
      margin: 0;

      color: ${({ theme }) => theme.COLORS.CAKE_100};
    }

    .btns {
      flex-direction: column;
      align-items: center;

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

  @media (min-width: 1143px) {
    .title {
      font-size: 32px;
      font-weight: 500;
      margin: 47px 0 23px;
    }

    .title:nth-child(1) {
      margin: 62px 0 23px;
    }

    .swiper {
      width: 1122px;
      height: 100%;
    }

    .swiper:last-child {
      margin-bottom: 47px;
    }

    .swiper-slide {
      max-width: 304px;
      height: 462px;

      .favorite {
        right: 18px;
      }

      a {
        img {
          width: 176px;
        }

        h2 {
          font-weight: 700;
          font-size: 24px;
        }
      }

      p {
        display: block;
        font-family: 'Roboto';
        font-size: 14px;
        text-align: center;
        width: 208px;
        height: 44px;
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
      }

      span {
        font-size: 32px;
        margin-bottom: 15px;
      }

      .btns {
        display: flex;
        flex-direction: row;
        gap: 18px;

        .include {
          width: 92px;
          height: 48px;
        }
      }
    }

    .swiper-button-prev {
      display: block;
      position: absolute;
      top: 0;
      left: 0;

      display: flex;
      align-items: center;
      justify-content: flex-end;

      width: 303px;
      height: 485px;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      background: ${({ theme }) => theme.COLORS.GRADIENTS_100};
      transform: matrix(-1, 0, 0, 1, 0, 0);
    }

    .swiper-button-prev:after {
      transform: matrix(-1, 0, 0, 1, 0, 0);
    }

    .swiper-button-next {
      display: block;
      position: absolute;
      top: 0;
      right: 0;

      display: flex;
      align-items: center;
      justify-content: flex-end;

      width: 186px;
      height: 485px;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      background: ${({ theme }) => theme.COLORS.GRADIENTS_100};
    }
  }

  @media (min-width: 768px) and (max-width: 1143px) {
    .title {
      font-size: 18px;
      margin-top: 62px;
    }

    .swiper {
      width: 690px;
      height: 292px;
      margin: 24px 0;
    }

    .swiper-slide {
      max-width: 210px;
      height: 292px;

      .favorite {
        right: 16px;
      }

      a {
        img {
          width: 88px;
        }

        h2 {
          font-weight: 500;
          font-size: 14px;
        }
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
