import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  > main {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;

    padding: 0 56px 33px;
    margin: 0 0 54px;

    .top {
      margin: 36px 0 16px;
      a {
        display: flex;
        align-items: center;

        font-weight: 500;
        font-size: 24px;

        margin-left: -30px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
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
        font-weight: 500;
        margin-bottom: 24px;
      }

      p {
        font-size: 16px;
        text-align: center;
        margin-bottom: 24px;
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
          font-weight: 500;
          margin-left: 36px;
        }
      }

      .edit {
        width: 316px;
        height: 48px;
        margin-top: 48px;
      }
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }

  ::-webkit-scrollbar-thumb {
    display: none;
  }

  @media (min-width: 900px) {
    main {
      flex-direction: row;
      margin: 0 auto 186px;
      padding: 0 150px;

      .top {
        margin-top: 24px;
        a {
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
        align-items: flex-start;
        margin-top: 75px;

        h1 {
          font-size: 40px;
        }

        p {
          font-size: 24px;
          text-align: start;
        }

        .tags {
          gap: 12px;
        }

        .btns {
          .include {
            font-size: 14px;
          }
        }

        .edit {
          width: 131px;
        }
      }
    }
  }

  @media (min-width: 600px) and (max-width: 900px) {
    main {
      flex-direction: column;
      align-content: center;

      padding: 0 56px 180px;
      margin: 0 0 54px;

      .top {
        a {
          position: absolute;
          left: 50px;
          font-weight: 500;
          font-size: 24px;
        }

        img {
          width: 264px;
          margin: 0;
          margin-top: 70px;
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
