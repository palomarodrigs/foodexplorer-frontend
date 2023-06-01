import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;

  > main {
    display: flex;
    flex-direction: column;

    padding: 32px 32px 0;
    margin-bottom: 100px;

    h1 {
      font-weight: 500;
      font-size: 32px;
      white-space: nowrap;
      margin: 0 0 43px;
    }

    .favorites {
      display: flex;
      flex-wrap: wrap;
    }

    .favorites-empty {
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

    @media (min-width: 1143px) {
      padding: 0 150px;
      h1 {
        margin: 34px 0 48px;
      }
    }

    @media (min-width: 768px) and (max-width: 1143px) {
      padding: 55px;
      align-items: center;

      .favorites {
        justify-content: center;
      }
    }
  }
`
