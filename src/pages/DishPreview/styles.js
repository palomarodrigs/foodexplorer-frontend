import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;

  > footer {
    position: absolute;
  }

  > main {
    display: flex;
    align-items: center;

    padding: 0 123px;

    .top {
      a {
        display: flex;
        align-items: center;

        font-size: 24px;
        font-weight: 700;

        margin: 24px 0 42px;
      }

      img {
        width: 390px;
        margin-right: 47px;
      }
    }

    .details {
      h1 {
        font-weight: 500;
        font-size: 40px;

        margin-bottom: 24px;
      }

      p {
        font-weight: 400;
        font-size: 24px;
        text-align: justify;

        margin-bottom: 24px;
      }
    }

    .purchase {
      display: flex;
      align-items: center;

      margin-top: 48px;

      gap: 36px;
    }

    .stepper {
      display: flex;
      align-items: center;
      gap: 17px;

      button {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }

      span {
        font-family: 'Roboto';
        font-size: 20px;
        font-weight: 700;
      }
    }

    .btn-include {
      button {
        padding: 12px 24px;
      }
    }
  }

  @media (max-width: 480px) {
    main {
      flex-direction: column;
      align-content: center;

      padding: 0 56px 33px;

      .top {
        a {
          font-weight: 500;
          font-size: 24px;

          margin-left: -30px;
        }

        img {
          width: 264px;
          margin: 0;
        }
      }

      .details {
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
          font-weight: 500;
          font-size: 27px;
        }

        p {
          font-weight: 400;
          font-size: 16px;
        }

        .tags {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 24px;
        }
      }

      .purchase {
        justify-content: center;

        margin-bottom: 54px;
      }
    }

    footer {
      position: initial;
    }
  }
`
