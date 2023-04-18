import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  > main {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 32px;
    margin-bottom: 150px;

    > .orders {
      display: flex;
      flex-direction: column;

      h2 {
        font-weight: 500;
        font-size: 32px;
        margin: 0 0 48px;
      }

      p {
        font-weight: 500;
        font-size: 20px;
      }

      .advance {
        width: 275px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 47px;
      }
    }

    @media (min-width: 900px) {
      padding: 0 140px;

      > .orders {
        h2 {
          margin: 34px 0 48px;
        }
        .advance {
          display: none;
        }
      }

      > .payment {
        display: none;
      }
    }

    @media (min-width: 600px) and (max-width: 900px) {
      justify-content: center;
      margin: 34px 0 155px;

      main {
        padding: 55px;
      }

      .orders {
        h2 {
          margin: 0 0 48px;
        }

        .advance {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 275px;

          margin-top: 47px;
        }
      }

      > .payment {
        display: none;
      }
    }
  }
`
