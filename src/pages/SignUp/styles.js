import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    display: flex;
    white-space: nowrap;
    gap: 10px;
    margin: 160px 0 73px;

    h1 {
      font-family: 'Roboto';
      font-size: 37px;
      font-weight: 700;
    }
  }

  @media (min-width: 1143px) {
    justify-content: space-between;
    flex-direction: row;

    .header {
      gap: 19px;
      margin: 0 auto;

      h1 {
        font-size: 42px;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1143px) {
    flex-direction: column;

    .header {
      margin: 150px 0 0;

      img {
        width: 49px;
      }

      h1 {
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 42px;
      }
    }
  }
`

export const Form = styled.form`
  width: 350px;
  height: 621px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0;
  margin-bottom: 300px;

  border-radius: 8px;
  background-color: transparent;

  > label {
    align-self: flex-start;
    margin-bottom: 8px;
  }

  > div {
    border: 0;
    margin-bottom: 32px;

    input {
      width: 500px;
    }
  }

  button {
    margin-bottom: 32px;
  }

  a {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  h1 {
    display: none;
  }

  @media (min-width: 900px) {
    width: 476px;
    height: 621px;
    flex-direction: column;

    padding: 64px;
    margin: 60px auto;

    border-radius: 16px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    h1 {
      display: block;
      margin-bottom: 32px;
    }

    button {
      padding: 12px 32px;
    }
  }
  @media (min-width: 600px) and (max-width: 900px) {
    margin: 0;
    padding: 0;
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
