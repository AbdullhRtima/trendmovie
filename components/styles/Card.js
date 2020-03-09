import styled from 'styled-components';
const MovieCards =styled.ul`
    list-style :none;
`
const Card = styled.div`
    position: relative;
    display:flex;
    width: 800px;
    height: 350px;
    margin: 100px auto; 
    overflow: hidden;
    border-radius: 10px;
    transition: all 0.4s;
    &:hover{
        transform: scale(1.02);
        transition: all 0.4s;
    }
    ul{
        list-style-type: none;
    }
.info_section{

        position: relative;
        width: 100%;
        height: 100%;
        background-blend-mode: multiply;
        z-index: 3;
        border-radius: 10px;
    }
.blur_back{
        position: absolute;
        top: 0;
        width:2rem;
        height: 100%; right: 0;
        border-radius: 11px;
    }
.bright{
  box-shadow: 0px 0px 150px -45px rgba(255, 51, 0, 0.5);
  &:hover{
    box-shadow: 0px 0px 120px -55px rgba(255, 51, 0, 0.5);
  }
}
@media screen and (min-width: 768px) {
  .movie_header{
    width: 60%;
  }
  
  .movie_desc{
    width: 50%;
  }
  
  .info_section{
    background: linear-gradient(to right, #0d0d0c 50%, transparent 100%);
  }
  
  .blur_back{
    width: 80%;
    background-position: -100% 10% !important;  
  }
}

@media screen and (max-width: 768px) {
  .movie_card{
    width: 95%;
    margin: 70px auto; 
    min-height: 350px;
    height: auto;
  }
  
  .blur_back{
    width: 100%;
    background-position: 50% 50% !important;  
  }
  
  .movie_header{
    width: 100%;
    margin-top: 85px;
  }
  
  .movie_desc{
    width: 100%;
  }
  
  .info_section{
    background: linear-gradient(to top, rgb(20, 20, 19) 50%, transparent 100%);
    display: inline-grid;
  }
}


#bright{
  box-shadow: 0px 0px 150px -45px rgba(255, 51, 0, 0.5);
  &:hover{
    box-shadow: 0px 0px 120px -55px rgba(255, 51, 0, 0.5);
  }
}

.bright_back{
  background: url("https://occ-0-2433-448.1.nflxso.net/art/cd5c9/3e192edf2027c536e25bb5d3b6ac93ced77cd5c9.jpg");
}

.ave_back{
    background: url("https://www.gannett-cdn.com/-mm-/c03fd140debe8ad4c05cf81a5cad7ad61a12ce52/c=0-1580-2985-3266&r=x803&c=1600x800/local/-/media/2017/06/09/USATODAY/USATODAY/636326272873599176-Black-Panther-Teaser.jpg");
}
`
const MovieHeader = styled.div`
      position: relative;
      display:flex;
      padding:2rem;
  .locandina{
        display:flex;
        flex-direction:column;
        position: relative;
        margin-right: 20px;
        height: 120px;
        box-shadow: 0 0 20px -10px rgba(0,0,0,0.5);
      }
      h1{
          margin-top:1px;
      }
`

export {
    Card,
    MovieHeader,
    MovieCards
}