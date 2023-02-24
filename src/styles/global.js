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
        overflow: hidden;

        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        outline: none;
    }

    a {
        text-decoration: none;
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
    
    /* ::-webkit-scrollbar {
         width: 0.5rem;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background-color: ${({ theme }) => theme.COLORS.PINK};
        outline: 1px solid slategrey;
    } */
`
