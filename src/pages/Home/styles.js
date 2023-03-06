import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  overflow: hidden;

  > main {
    padding: 0 123px;

    overflow-y: auto;

    .content {
      display: flex;
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    main {
      padding: 15px;

      .content {
        justify-content: flex-start;
      }
    }
  }
`
