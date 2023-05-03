import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  min-height: 100vh;
  position: relative;
  overflow: hidden;

  > main {
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    margin: 0 auto;
    padding: 0 32px 90px;

    .top {
      display: flex;
      flex-direction: column;
      gap: 24px;
      margin: 40px 0 32px -12px;

      a {
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 24px;
        margin-left: -10px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }

      h1 {
        font-weight: 500;
        font-size: 32px;
      }
    }

    @media (min-width: 1143px) {
      .top {
        display: flex;
        align-items: center;

        h1 {
          margin-left: 45px;
        }
      }
      width: 1120px;
      padding: 0;
    }
  }

  @media (min-width: 768px) and (max-width: 1143px) {
    > main {
      width: 428px;
      align-items: center;
      padding: 0 0 40px;

      .top {
        padding: 0;

        position: absolute;
        left: 135px;

        h1 {
          font-size: 32px;
        }
      }
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  margin-bottom: 80px;

  > .input-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 32px;

    div {
      > input {
        ::placeholder {
          color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
      }
    }

    label {
      width: 364px;
      height: 48px;

      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
      gap: 8px;

      margin-top: 10px;

      font-size: 14px;
      cursor: pointer;

      border-radius: 5px;
      background-color: ${({ theme }) => theme.COLORS.DARK_700};

      > input[type='file'] {
        display: none;
      }

      > svg {
        width: 24px;
        height: 24px;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }

    .name {
      width: 364px;
      div {
        margin-top: 16px;

        > input {
          width: 439px;
          height: 48px;
          background-color: ${({ theme }) => theme.COLORS.DARK_700};
        }
      }
    }

    .options {
      display: flex;
      flex-direction: column;

      select {
        width: 364px;
        height: 48px;

        font-size: 14px;
        padding: 16px;

        border: 0;
        border-radius: 5px;

        color: ${({ theme }) => theme.COLORS.LIGHT_200};
        background-color: ${({ theme }) => theme.COLORS.DARK_700};

        option {
          font-size: 18px;
          padding: 87px;
        }

        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
    }

    .tags {
      width: 364px;
      height: auto;

      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 16px;

      padding: 8px;
      margin-top: 10px;

      border-radius: 8px;
      background-color: ${({ theme }) => theme.COLORS.DARK_700};
    }

    .price {
      width: 364px;

      div {
        height: 48px;
        margin-top: 16px;

        background-color: ${({ theme }) => theme.COLORS.DARK_700};
      }
    }
  }

  .description {
    margin-bottom: 32px;
    div {
      width: 364px;

      textarea {
        width: 364px;
      }
    }
  }

  .save-changes {
    button {
      width: 364px;
      height: 48px;
      padding: 12px 24px;
      background-color: ${({ theme }) => theme.COLORS.RED_100};
      transition: 0.5s;
    }
  }

  .save-changes button:hover {
    background-color: ${({ theme }) => theme.COLORS.RED_200};
  }

  @media (min-width: 1143px) {
    align-items: flex-end;
    margin-bottom: 116px;

    > .input-wrapper {
      padding: 0;
      margin: 0 auto;

      label {
        width: 229px;
      }

      .options {
        select {
          width: 386px;
        }
      }

      .price {
        width: 251px;
      }

      .tags {
        width: 760px;
      }
    }

    .description {
      div {
        width: 1043px;

        textarea {
          width: 1043px;
        }
      }
    }

    .save-changes {
      margin-right: 40px;
      button {
        width: 172px;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1143px) {
    align-items: center;

    > .input-wrapper {
      flex-direction: column;
      align-items: flex-start;

      margin-top: 180px;
      padding: 0;

      label {
        width: 500px;
      }

      div {
        width: 500px;
        input {
          width: 500px;
        }
      }

      .name {
        div {
          input {
            width: 500px;
          }
        }
      }

      .options {
        select {
          width: 500px;
        }
      }

      .tags {
        width: 500px;

        div {
          width: 118px;
          input {
            width: 80px;
          }
        }
      }

      .price {
        width: 364px;
      }
    }

    .description {
      div {
        width: 500px;
        height: 172px;

        textarea {
          width: 500px;
        }
      }
    }

    .save-changes {
      button {
        width: 500px;
      }
    }
  }
`
