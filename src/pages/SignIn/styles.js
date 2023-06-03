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
    margin: 100px 0 73px;
    animation: topdown 1s;

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
      animation: swipeleft 1s;


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

  @keyframes topdown {
  0% {
    opacity: 0;
    transform: translateY(-15px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
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
  animation: downtop 1s 0.2s reverse backwards;

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
    transition: 0.3s;
  }

  a:hover {
    color: ${({ theme }) => theme.COLORS.CAKE_100};
  }

  h1 {
    display: none;
  }

  @media (min-width: 1143px) {
    width: 476px;
    height: 540px;
    flex-direction: column;

    padding: 64px;
    margin: 60px auto;

    border-radius: 16px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    animation: swiperight 1s 0.3s backwards;


    h1 {
      display: block;
      margin-bottom: 32px;
    }

    button {
      padding: 12px 32px;
    }

    > div {
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
  @media (min-width: 768px) and (max-width: 1143px) {
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
