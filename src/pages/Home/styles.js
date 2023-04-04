import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  main {
    padding: 0;

    .content {
      padding: 15px;
      margin-bottom: 100px;

      .banner {
        margin: 44px 0 0;
      }
    }

    .carousels {
      justify-content: flex-start;
    }

    ::-webkit-scrollbar {
      display: none;
    }

    ::-webkit-scrollbar-thumb {
      display: none;
    }
  }

  @media (min-width: 900px) {
    overflow: hidden;

    > main {
      /* padding-right: 1px; */
      overflow-y: auto;

      .content {
        margin-bottom: 70px;
      }

      .carousels {
        display: flex;
        justify-content: center;
      }
    }
  }

  @media (min-width: 600px) and (max-width: 900px) {
    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0;

      .content {
        padding: 55px 0 25px;

        .banner {
          margin: 44px 0 0;
          width: 500px;
        }
      }

      .carousels {
        justify-content: flex-start;
      }

      ::-webkit-scrollbar {
        display: none;
      }

      ::-webkit-scrollbar-thumb {
        display: none;
      }
    }
  }
`
