import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  min-height: 100vh;

  overflow: hidden;

  > main {
    display: flex;
    flex-direction: column;

    padding: 32px;
    margin-bottom: 50px;

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

    @media (min-width: 900px) {
      padding: 0 150px;
      margin-bottom: 178px;

      h1 {
        margin: 34px 0 48px;
      }
    }

    @media (min-width: 600px) and (max-width: 900px) {
      padding: 55px;
      align-items: center;

      .favorites {
        justify-content: center;
      }
    }
  }
`
