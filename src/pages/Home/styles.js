import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px 15px 0;
    margin-bottom: 100px;

    ::-webkit-scrollbar {
      display: none;
    }

    ::-webkit-scrollbar-thumb {
      display: none;
    }

    @media (min-width: 1143px) {
      /* padding-right: 1px; */
      overflow-y: auto;

      .carousels {
        display: flex;
        justify-content: center;
      }
    }

    @media (min-width: 768px) and (max-width: 1143px) {
      padding: 55px 46px;

      .front-cover {
        margin: 44px 0 0;
        /* width: 450px; */
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
