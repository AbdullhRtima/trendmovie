import styled , { ThemeProvider, createGlobalStyle } from 'styled-components';
import axios from 'axios'
import Meta from './Meta'
import Navbar from './Navbar'
const theme = {
    green: '#01d277',
    white: '#ffff',
    black: '#393939',
    grey: '#3A3A3A',
    lightgrey: '#E1E1E1',
    offWhite: '#EDEDED',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  };
  
const StyledPage = styled.div`
    color: ${props => props.theme.white};
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
        background:black;
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        font-family: 'Source Sans Pro', Arial, sans-serif;
    }
    a{
      cursor: pointer;
    }
    `;
function Page(props) {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
             <StyledPage>
                <Meta/>
                <GlobalStyle/>
                <Navbar/>
                <Inner>{props.children}</Inner>
             </StyledPage>
         </ThemeProvider>
        </React.Fragment>
    )
}
Page.getInitialProps = async ctx => {
  const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=5033c761b29137a4b26a100f295b65c8&language=en-US&page=1')
  return{res :res.data.results}
}

export default Page ;