import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 123px;

  .header {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;

    margin-left: 150px;

    h1 {
      font-weight: 700;
      font-size: 42px;
      margin-left: 19px;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .header {
      flex-direction: row;
      align-items: center;
      justify-content: center;
      align-self: center;

      margin: 150px 0 0;

      h1 {
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 37px;
      }
    }
  }
`

export const Form = styled.form`
  width: 476px;
  height: 621px;

  padding: 64px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 60px 108px;

  h1 {
    margin-bottom: 32px;
  }

  > label {
    align-self: flex-start;
    margin-bottom: 8px;
  }

  > div {
    margin-bottom: 32px;

    > input {
      width: 348px;
    }
  }

  button {
    padding: 12px 32px;
  }

  a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 14px;
    margin-top: 32px;
  }

  border-radius: 16px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  @media (max-width: 480px) {
    width: 350px;
    padding: 0;
    margin-bottom: 300px;

    background-color: transparent;
    justify-content: center;
    align-items: center;

    div {
      border: 0;
    }

    h1 {
      display: none;
    }
  }
`
