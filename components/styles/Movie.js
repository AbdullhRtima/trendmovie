import styled from 'styled-components';

const MovieDetials = styled.div`
    margin-top:10rem;
    position:relative;
    z-index:1;
    display:flex;
    justify-content:space-between;
    .movie_details{
        color:#ffff;
        display:flex;
        margin-top:-3rem;
        flex-direction:column;
        margin-left:1rem;
    }
    .info{
        margin-top:-2rem;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        width:40rem;
        font-size:2rem;
    }
    .info_rate{
        margin-left:1rem;
    }
    .back-ground{
        position:absolute;
        top:0;
        left:0;
        z-index:-1;
        width:100%;
        height:100%;
    }
    h1{
        text-transform:uppercase;
    }
    .genre{
        color:#01d277;
        margin-right:1rem;
    }
`
const Container = styled.div`
    .youtube{
        margin-left:20rem;
        margin-top:2rem;
    }
`
export {MovieDetials ,Container}