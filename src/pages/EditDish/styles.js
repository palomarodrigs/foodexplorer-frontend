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
        animation: swiperight 1s 0.3s backwards;
      }

      h1 {
        font-weight: 500;
        font-size: 32px;
        animation: swipeleft 1s 0.3s backwards;
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

  @keyframes swipeleft {
  0% {
    opacity: 0;
    transform: translateX(-15px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

  @keyframes swiperight {
  0% {
    opacity: 0;
    transform: translateX(15px);
  }
  
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
  overflow-y: auto;
  animation: downtop 1s 0.4s reverse backwards;

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

      padding: 12px 32px;
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

  .btns {
    display: flex;
    white-space: nowrap;
    gap: 32px;

    .delete {
      width: 160px;
      padding: 12px 24px;
      background-color: ${({ theme }) => theme.COLORS.DARK_700};
    }

    .save {
      width: 172px;
      padding: 12px 24px;
      background-color: ${({ theme }) => theme.COLORS.RED_100};
      transition: 0.5s;
    }

    .save:hover {
      background-color: ${({ theme }) => theme.COLORS.RED_200};
    }
  }

  @media (min-width: 1143px) {
    align-items: flex-end;
    margin-bottom: 116px;
    animation: swiperight 1s 0.7s backwards;

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

    .btns {
      margin-right: 40px;

      .delete {
        width: 135px;
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

    .btns {
      gap: 100px;
      .delete {
        width: 200px;
      }

      .save {
        width: 195px;
      }
    }
  }

  @keyframes downtop {
  100% {
    opacity: 0;
    transform: translateY(15px);
  }
}

 @keyframes swiperight {
  0% {
    opacity: 0;
    transform: translateX(15px);
  }
  
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
`
