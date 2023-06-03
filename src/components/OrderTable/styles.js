import styled from 'styled-components'

export const Container = styled.div`
  > main {
    max-width: 1200px;
    margin: 0 auto 118px;


    h1 {
      font-weight: 500;
      margin: 34px 0 34px;
      animation: swipeleft 1s 0.3s backwards;
    }

    table {
      width: 100%;
      border-radius: 8px 8px 0px 0px;
      border: 2px solid ${({ theme }) => theme.COLORS.DARK_900};
      overflow-y: auto;
      animation: swiperight 1s 0.3s backwards;
      
      table * {
        font-family: 'Roboto';
        font: 14px;
      }

      th {
        padding: 21px 24px;
        border-right: 2px solid ${({ theme }) => theme.COLORS.DARK_900};
      }

      th:last-child {
        border: 0;
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

        select {
          font-family: 'Roboto';
          font-size: 14px;

          width: 100%;
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

      td:last-child {
        border-right: 0;
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

  @keyframes swiperight {
  0% {
    opacity: 0;
    transform: translateX(15px);
  }
  
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
`
