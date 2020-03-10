import styled from 'styled-components';

const Container = styled.div `
   display:flex;
   margin-left:10rem;
   flex-wrap:wrap; 
`;
const Details = styled.div`
    color:white;
    padding:1rem;
    position:absolute;
    width:100%;
    height:100%;
    margin-left:1rem;
    bottom:-200px;
    left:0;
    z-index:2;
    h1{
        color:#ffff;
        font-size:1.5rem;
        width:7rem;
    }
`;
const MCard = styled.div `
    color:black;
    margin-top:20rem;
    position:relative;
    padding:1rem;
    &:hover ${Details} {
        bottom:0;
  }
`;
const Poster = styled.div `
    width:100%;
    &::before{
        content:'';
        position:absolute;
        bottom:0;
        left:1;
        width:90%;
        height:80%;
        background:linear-gradient(0deg,#000 50%,transparent);
        transition:5s;
        z-index:1;
    }
`;

const Rating = styled.div `
    position:relative;
    padding: .2rem 0 ;
    span{
        font-size:2rem;
    }
`;
const Tags = styled.div `
    
`;
const Info = styled.div `
    p{
        font-size:1.5rem;
    }
`;

export {Container,MCard ,Poster,Details,Rating,Tags,Info}