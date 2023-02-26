import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}
body {
    margin: 0;
    padding:0;
}
ul {
    padding-left: 0;
}
li {
    margin-bottom: 5px;
}
h1, h2, p {
margin: 0;
    padding:0;
}
h1 {
    font-size: 16px;
    margin-left: 20px;
}
h2 {
    font-size: 16px;
    margin-bottom: 5px;
    margin-left: 20px;
    
}
p {
    font-size: 16px;

}
`;
