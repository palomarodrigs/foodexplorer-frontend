import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  pointer-events: ${({ isVisible }) => (isVisible ? 'auto' : 'none')};

  transition: 0.5s;
  transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'translateY(50px)')};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > header {
    display: flex;
    align-items: center;
    gap: 16px;

    width: 428px;
    height: 114px;

    position: absolute;
    top: 0;

    padding: 32px;
    margin-bottom: 36px;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    p {
      font-family: 'Roboto';
      font-size: 21px;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    svg {
      transition: 0.7s;
      transform: ${({ isVisible }) => (isVisible ? 'rotate(0deg)' : 'rotate(-45deg)')};
    }
  }

  > main {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;

    padding: 32px;
    margin: 110px 0 45px;

    transition: 0.7s;
    transform: ${({ isVisible }) => (isVisible ? 'scale(1)' : 'scale(0.7)')};

    div {
      width: 372px;
      margin-bottom: 46px;
    }

    .btns {
      display: flex;
      flex-direction: column;
      gap: 20px;

      a,
      button {
        font-weight: 300;
        font-size: 24px;
        padding-bottom: 10px;

        color: ${({ theme }) => theme.COLORS.TITLE_200};
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_900};
      }

      button {
        width: 370px;
        display: flex;
      }
    }
  }

  @media (min-width: 600px) and (max-width: 900px) {
    header {
      width: 100%;
      align-items: center;
    }

    main {
      justify-content: flex-start;
      .btns button {
        width: 100%;
      }

      div {
        width: 100%;

        input {
          width: 100%;
        }
      }
    }
  }
`
