import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;

  .table-mobile {
    max-width: 358px;
    display: flex;
    flex-direction: column;
    margin: 24px auto 95px;

    h1 {
      font-weight: 500;
      font-size: 32px;
      margin-bottom: 20px;
    }

    table * {
      font-family: 'Roboto';
      font-size: 14px;
      font-weight: 400;

      color: ${({ theme }) => theme.COLORS.LIGHT_200};
    }

    table {
      width: 100%;
      height: 114px;

      padding: 8px 20px;
      margin-bottom: 20px;

      border-radius: 8px;
      border: 2px solid ${({ theme }) => theme.COLORS.DARK_900};

      .tbody-wrapper {
        display: flex;
        flex-direction: column;
        gap: 16px;

        td {
          select {
            font-family: 'Roboto';
            font-size: 14px;

            width: 286px;
            height: 48px;

            display: flex;
            align-items: center;
            padding: 8px;

            border: 0;
            border-radius: 5px;

            color: ${({ theme }) => theme.COLORS.LIGHT_200};
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
          }
        }
      }

      tr {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px;
      }
    }
  }

  .order-empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      margin: 180px auto;

      p {
        text-align: center;
        font-size: 18px;
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
      }

      a {
        display: flex;
        align-items: center;
        gap: 2px;
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.CAKE_100};
      }
    }

  .table-desktop {
    display: none;
  }

  @media (min-width: 1143px) {
    .table-desktop {
      display: block;
    }

    .table-mobile {
      display: none;
    }
  }

  @media (min-width: 768px) and (max-width: 1143px) {
      display: flex;
      justify-content: center;

      padding: 32px;
      margin-bottom: 400px;

      > .table-desktop {
        display: none;
      }

      .table-mobile {
        max-width: 500px;
        display: flex;
        flex-direction: column;

        h1 {
          font-weight: 500;
          font-size: 32px;
          margin-bottom: 20px;
        }

        table * {
          font-family: 'Roboto';
          font-size: 14px;
          font-weight: 400;

          color: ${({ theme }) => theme.COLORS.LIGHT_200};
        }

        table {
          width: 100%;
          height: 114px;

          padding: 8px;
          margin-bottom: 20px;

          border-radius: 8px;
          border: 2px solid ${({ theme }) => theme.COLORS.DARK_900};

          .tbody-wrapper {
            display: flex;
            flex-direction: column;
            gap: 16px;
            padding: 20px 8px;

            td {
              select {
                font-family: 'Roboto';
                font-size: 14px;

                width: 450px;
                height: 48px;

                display: flex;
                align-items: center;
                padding: 8px;

                border: 0;
                border-radius: 5px;

                color: ${({ theme }) => theme.COLORS.LIGHT_200};
                background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
              }
            }
          }

          tr {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px;
          }
        }
      }
  }
`
