import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  > main {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;

    padding: 0 56px;
    margin-bottom: 150px;

    .top {
      position: absolute;
      left: 20px;
      margin: 36px 0 16px;
      animation: swiperight 1s 0.3s backwards;

      a {
        display: flex;
        align-items: center;

        font-weight: 500;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;

      .cover img {
        width: 264px;
        margin: 0;
        margin: 90px 0 16px;
        animation: topdown 1s 0.3s backwards;
      }

      .details {
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
          font-size: 27px;
          font-weight: 500;
          margin-bottom: 24px;
          animation: topdown 1s 0.7s backwards;
        }
    
        p {
          font-size: 16px;
          text-align: center;
          margin-bottom: 24px;
          animation: topdown 1s 0.9s backwards;
        }
    
        .tags {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 24px;
          animation: topdown 1s 1.1s backwards;
        }
    
        .btns {
          display: flex;
          align-items: center;
          margin-top: 48px;

        .select-quantity div {
          animation: swipeleft 1s 1.1s backwards;
          margin: 0;
        }
    
        .include {
          width: 162px;
          height: 48px;
    
          font-size: 11px;
          font-weight: 500;
          margin-left: 36px;
          animation: swiperight 1s 1.1s backwards;
        }
      }
    
        .edit {
          width: 316px;
          height: 48px;
          margin-top: 48px;
          animation: swipeleft 1s 1.1s backwards;
        }
      }
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }

  ::-webkit-scrollbar-thumb {
    display: none;
  }

  @media (min-width: 1143px) {
    main {
      padding: 0 150px;
      margin: 0 auto 186px;

      .top {
        left: 135px;
        margin-top: 24px;
        a {
          font-size: 24px;
          font-weight: 700;
          margin: 24px 0 42px;
        }
      }

      .container {
        flex-direction: row;
        margin-top: 42px;

        .cover img {
          width: 390px;
          margin-right: 47px;
          animation: swipeleft 1s 0.3s backwards;
        }

        .details {
          align-items: flex-start;
          margin-top: 75px;


          h1 {
            font-size: 40px;
          }
  
          p {
            font-size: 24px;
            text-align: start;
          }
  
          .tags {
            gap: 12px;
          }
  
          .btns {
            .include {
              font-size: 14px;
            }
          }
  
          .edit {
            width: 131px;
          }
        }

      }
    }
  }

  @media (min-width: 768px) and (max-width: 1143px) {
    main {
      flex-direction: column;
      align-content: center;

      padding: 0 56px 180px;
      margin: 0 0 54px;

      .top {
        a {
          position: absolute;
          left: 50px;
          font-weight: 500;
          font-size: 24px;
        }

        img {
          width: 264px;
          margin: 0;
          margin-top: 70px;
        }
      }

      .container {
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
          font-size: 27px;
        }

        p {
          font-size: 16px;
          text-align: center;
        }

        .tags {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 24px;
        }

        .btns {
          display: flex;
          align-items: center;
          margin-top: 48px;

          .include {
            width: 162px;
            height: 48px;
            font-size: 11px;
            margin-left: 36px;
          }
        }

        .edit {
          width: 316px;
          height: 48px;
        }
      }
    }

    ::-webkit-scrollbar {
      display: none;
    }

    ::-webkit-scrollbar-thumb {
      display: none;
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
