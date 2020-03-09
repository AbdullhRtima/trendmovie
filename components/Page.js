import styled , { ThemeProvider, createGlobalStyle } from 'styled-components';
import Meta from './Meta'

const theme = {
    green: '#01d277',
    black: '#393939',
    grey: '#3A3A3A',
    lightgrey: '#E1E1E1',
    offWhite: '#EDEDED',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  };
  
const StyledPage = styled.div`
    background: white;
    color: ${props => props.theme.green};
  `;
  
const Inner = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
    padding: 2rem;
  `;
const GlobalStyle = createGlobalStyle`
        html {
        box-sizing: border-box;
        font-size: 10px;
        }
        *, *:before, *:after {
        box-sizing: inherit;
        }
        body {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        font-family: 'radnika_next';
    }
    `;
function Page(props) {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
             <StyledPage>
                <Meta/>
                <GlobalStyle/>
                <Inner>{props.children}</Inner>
             </StyledPage>
         </ThemeProvider>
        </React.Fragment>
    )
}

export default Page ;