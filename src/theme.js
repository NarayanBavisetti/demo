import { createGlobalStyle} from 'styled-components'

export const lightTheme = {
    body: "#fff",
    fontColor:"#000",
};
export const darkTheme = {
    body : "#000",
    fontColor:"#fff",
}

export const GlobalStyle = createGlobalStyle`
body{
  background-color:${props => props.theme.body};
}
`;
// background-color:${props => props.theme.mode == 'dark'?'#111':'#fff'};
// color:${props => props.theme.mode ==='dark'?'#fff':'#111'}