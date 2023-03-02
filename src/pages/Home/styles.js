import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > main {
    padding: 0 123px;

    overflow: auto;

    span {
      font-weight: 500;
      font-size: 32px;

      margin-bottom: 23px;

      display: inline-block;
    }
  }
`
