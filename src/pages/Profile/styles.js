import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-y: auto;

  display: grid;
  grid-template-rows: 114px auto;
  grid-template-areas: 'header' 'form';
  overflow: auto;

  > header {
    grid-area: header;
    display: flex;
    justify-content: space-between;
    align-items: center;
    animation: topdown 700ms;

    height: 144px;
    padding: 0 27px 12px 27px;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    svg {
      width: 32px;
    }

    button {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      animation: swiperight 1s 1.1s backwards;
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

export const Form = styled.div`
  grid-area: form;
  width: 360px;
  margin: 0 auto;
  animation: downtop 1s 0.3s reverse backwards;

  div:nth-child(4) {
    margin-top: 24px;
  }

  @media (min-width: 1143px) {
    margin-bottom: 150px;
  }

  @keyframes downtop {
  100% {
    opacity: 0;
    transform: translateY(15px);
  }
}
`

export const Avatar = styled.div`
  position: relative;
  width: 186px;
  height: 186px;

  margin: -84px auto 32px;

  > img {
    width: 186px;
    height: 186px;

    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_500};
    border-radius: 50%;
    object-fit: cover;
  }

  > label {
    width: 48px;
    height: 48px;
    bottom: 7px;
    right: 7px;

    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;

    cursor: pointer;

    background-color: ${({ theme }) => theme.COLORS.RED_200};
    border-radius: 50%;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`
