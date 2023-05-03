import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 383px;
  height: 120px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  margin: 44px 0 0;
  border-radius: 2px;
  background: ${({ theme }) => theme.COLORS.GRADIENTS_200};

  > img {
    position: absolute;
    width: 191px;
    height: 149px;
    right: 207px;
    top: -30px;

    #invert {
      transform: scaleX(-1);
    }
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

      font-family: 'Roboto';

      word-wrap: break-word;
    }
  }

  @media (min-width: 1143px) {
    width: 1120px;
    height: 273px;
    gap: 100px;

    margin: 164px auto 0;
    border-radius: 8px;

    > img {
      width: 632px;
      height: 406px;
      right: 540px;
      top: -132px;
    }

    > div {
      margin: 0 295px;
      white-space: nowrap;

      h2 {
        font-weight: 500;
        font-size: 40px;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1143px) {
    width: 100%;
    height: 120px;

    margin-top: 44px;
    border-radius: 2px;

    > img {
      width: 191px;
      height: 149px;
      left: -30px;
      top: -30px;
    }

    > div {
      margin: 0 auto;

      h2 {
        font-size: 18px;
        font-weight: 600;
      }

      p {
        font-size: 12px;
        font-weight: 400;
        white-space: nowrap;
      }
    }
  }
`
