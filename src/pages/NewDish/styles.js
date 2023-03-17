import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    width: 1120px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    margin: 0 auto;
    padding: 24px 0 40px;

    .top {
      display: flex;
      flex-direction: column;
      gap: 24px;

      .btn-return {
        margin-top: 40px;
      }

      h1 {
        font-weight: 500;
        font-size: 32px;
        margin-bottom: 32px;
      }
    }

    .btns {
      display: flex;
      justify-content: flex-end;
      gap: 32px;

      margin-top: 32px;
      white-space: nowrap;

      .delete {
        width: 135px;
        padding: 12px 24px;
        background-color: ${({ theme }) => theme.COLORS.DARK_700};
      }

      .save {
        width: 172px;
        padding: 12px 24px;
        background-color: ${({ theme }) => theme.COLORS.RED_100};
      }
    }
  }

  @media (max-width: 480px) {
    .top {
      margin: 0;
      padding: 0 32px;

      .btn-return {
        font-size: 16px;
      }

      h1 {
        font-size: 32px;
      }
    }
    > main {
      width: 428px;

      padding: 0 0 40px;

      .btns {
        .delete {
          width: 160px;
        }
      }
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  > .input-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 32px;

    margin-bottom: 32px;

    div {
      > input {
        ::placeholder {
          color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
      }
    }

    label {
      width: 229px;
      height: 48px;

      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
      gap: 8px;

      margin-top: 16px;
      padding: 12px 32px;

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
        width: 386px;
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
      width: 837px;
      height: auto;

      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 16px;

      padding: 8px;
      margin-top: 16px;

      border-radius: 8px;
      background-color: ${({ theme }) => theme.COLORS.DARK_700};
    }

    .price {
      width: 251px;

      div {
        height: 48px;
        margin-top: 16px;

        background-color: ${({ theme }) => theme.COLORS.DARK_700};
      }
    }
  }

  @media (max-width: 480px) {
    align-items: center;

    > .input-wrapper {
      padding: 32px;

      label {
        width: 364px;
      }

      .name {
        width: 364px;
      }

      .options {
        select {
          width: 364px;
        }
      }

      .price {
        width: 364px;
      }

      .tags {
        width: 364px;
      }
    }
  }
`
