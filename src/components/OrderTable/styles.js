import styled from 'styled-components'

export const Container = styled.div`
  > main {
    max-width: 1200px;
    margin: 0 auto;

    h1 {
      font-weight: 500;
      margin: 34px 0 34px;
    }

    table {
      width: 100%;
      border-radius: 8px 8px 0px 0px;
      border: 2px solid ${({ theme }) => theme.COLORS.DARK_900};
      /* border-width: 2px 2px 0 2px; */

      table * {
        font-family: 'Roboto';
        font: 14px;
      }

      th {
        padding: 21px 24px;
        border-right: 2px solid ${({ theme }) => theme.COLORS.DARK_900};
        /* border-bottom: 2px solid ${({ theme }) => theme.COLORS.DARK_900}; */
      }

      th:last-child {
        border: 0;
        /* border-bottom: 2px solid ${({ theme }) => theme.COLORS.DARK_900}; */
      }

      td {
        padding: 16px 24px;
        white-space: nowrap;

        border-right: 2px solid ${({ theme }) => theme.COLORS.DARK_900};
        border-top: 2px solid ${({ theme }) => theme.COLORS.DARK_900};

        span {
          color: ${({ theme }) => theme.COLORS.LIGHT_200};
        }

        p {
          color: ${({ theme }) => theme.COLORS.LIGHT_200};
        }
      }

      td:last-child {
        border-right: 0;
      }
    }
  }
`
