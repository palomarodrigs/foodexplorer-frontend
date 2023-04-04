import styled from 'styled-components'

export const Container = styled.div`
  .favorites-list {
    display: flex;
    align-items: center;
    margin-bottom: 32px;

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

  @media (min-width: 900px) {
    > .favorites-list {
      margin-bottom: 48px;
    }
  }
`
