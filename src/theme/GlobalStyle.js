import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600&display=swap');
    *,*::after,*::before{
        box-sizing:border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin:0;
        padding:0;
    }
    html{
        font-size:62.5%;
    }
    body{
        font-family: 'Montserrat', sans-serif;
        font-size:1.6rem;
        padding-left:150px;
    }
`;

export default GlobalStyle;
