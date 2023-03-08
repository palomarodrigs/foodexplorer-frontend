import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  > main {
    padding-right: 1px;
    overflow-y: auto;

    .carousels {
      display: flex;
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    main {
      padding: 0;

      .content {
        padding: 15px;

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
  }
`
