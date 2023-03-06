import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 1120px;
  height: 273px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  margin: 164px auto 0;

  border-radius: 8px;
  background: ${({ theme }) => theme.COLORS.GRADIENTS_200};

  > img {
    position: absolute;

    right: 578px;
    top: -132px;

    #inverter {
      transform: scaleX(-1);
    }
  }

  > div {
    margin-right: 100px;

    h2 {
      font-weight: 500;
      font-size: 40px;
    }

    p {
      font-family: 'Roboto';
    }
  }

  @media (max-width: 480px) {
    width: 376px;
    height: 120px;

    margin: 44px 0 0;
    border-radius: 2px;

    > img {
      width: 191px;
      height: 149px;
      right: 207px;
      top: -30px;
    }

    > div {
      width: 202px;
      margin-right: 8px;

      h2 {
        font-size: 18px;
        font-weight: 600;
      }

      p {
        font-size: 12px;
        font-weight: 400;

        word-wrap: break-word;
      }
    }
  }
`
