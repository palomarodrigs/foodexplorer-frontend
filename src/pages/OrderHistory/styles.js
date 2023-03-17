import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  min-height: 100vh;

  overflow: hidden;

  > main {
    margin-bottom: 370px;

    .table-mobile {
      display: none;
    }

    @media (max-width: 480px) {
      padding: 32px;
      margin-bottom: 282px;

      > .table-desktop {
        display: none;
      }

      .table-mobile {
        max-width: 358px;
        display: flex;
        flex-direction: column;

        overflow: auto;

        margin: 0 auto 24px;

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
    }
  }
`
