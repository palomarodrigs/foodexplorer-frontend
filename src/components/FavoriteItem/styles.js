import styled from 'styled-components'

export const Container = styled.div`
  .favorites-list {
    display: flex;
    align-items: center;
    margin-bottom: 32px;
    animation: downtop 1s 0.3s reverse backwards;

    img {
      width: 72px;
      margin-bottom: 5px;
    }

    .favorites-wrapper {
      display: flex;
      align-items: center;

      gap: 5px;

      span {
        font-weight: 500;
        font-size: 20px;
      }

      .item {
        display: flex;
        flex-direction: column;

        margin-left: 13px;
        margin-right: 48px;
      }

      a {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 12px;

        color: ${({ theme }) => theme.COLORS.RED_100};
      }
    }
  }

  @media (min-width: 1143px) {
    > .favorites-list {
      margin-bottom: 48px;
      animation: swipeleft 1s 0.3s backwards;
    }
  }

  @keyframes downtop {
  100% {
    opacity: 0;
    transform: translateY(15px);
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
