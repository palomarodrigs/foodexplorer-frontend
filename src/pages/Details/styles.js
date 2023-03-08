import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  > main {
    display: flex;
    align-items: center;

    margin: 0 auto 185px;

    padding: 0 123px;

    .top {
      a {
        display: flex;
        align-items: center;

        font-size: 24px;
        font-weight: 700;

        margin: 24px 0 42px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
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
        font-size: 24px;
        margin-bottom: 24px;
      }

      .btns {
        display: flex;
        align-items: center;
        margin-top: 48px;

        .include {
          width: 162px;
          height: 48px;

          font-weight: 500;
          font-size: 14px;
          margin-left: 36px;
        }
      }

      .edit {
        width: 131px;
        height: 48px;

        margin-top: 48px;
      }
    }
  }

  @media (max-width: 480px) {
    overflow: auto;

    main {
      flex-direction: column;
      align-content: center;

      padding: 0 56px 33px;
      margin: 0 0 54px;

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
          font-size: 27px;
        }

        p {
          font-size: 16px;
          text-align: center;
        }

        .tags {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 24px;
        }

        .btns {
          display: flex;
          align-items: center;
          margin-top: 48px;

          .include {
            width: 162px;
            height: 48px;
            font-size: 11px;
            margin-left: 36px;
          }
        }

        .edit {
          width: 316px;
          height: 48px;
        }
      }
    }

    ::-webkit-scrollbar {
      display: none;
    }

    ::-webkit-scrollbar-thumb {
      display: none;
    }
  }
`
