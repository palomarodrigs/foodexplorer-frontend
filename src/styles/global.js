import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        /* overflow: hidden; */

        width: 100%;
        height: 100%;
        -webkit-font-smoothing: antialiased;
    }

     p {
        color: ${({ theme }) => theme.COLORS.TITLE_200};
    }

    body, input, button, textarea {
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        outline: none;
    }

    a {
        text-decoration: none;
        list-style: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;

         border: none;
         background: transparent;
    }

    button:hover, a:hover {
        filter: brightness(0.9)
    }
    
    ::-webkit-scrollbar {
         width: 0.5rem;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 6px;
        background-color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
`
