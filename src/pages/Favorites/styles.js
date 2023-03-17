import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  min-height: 100vh;

  overflow: hidden;

  > main {
    display: flex;
    flex-direction: column;

    padding: 0 140px;
    margin-bottom: 178px;

    h1 {
      font-weight: 500;
      font-size: 32px;
      margin: 34px 0 48px;
    }

    .favorites {
      display: flex;
      flex-wrap: wrap;
    }

    @media (max-width: 480px) {
      padding: 32px;
      margin-bottom: 50px;

      h1 {
        white-space: nowrap;
        margin: 0 0 43px;
      }
    }
  }
`
