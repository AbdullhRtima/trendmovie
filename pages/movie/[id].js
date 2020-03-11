import axios from 'axios'
import SingleMovie from '../../components/SingleMovie'

function Movie(props) {
    const movie = props.data;
    const vid = props.vid.results;
    const credit= props.credits
        return (
            <>
                <SingleMovie
                key={movie.id}
                movie={movie}
                vid={vid}
                credit={credit} />
            </>
        )
}
Movie.getInitialProps = async ({query}) => {
    const getData = ()=> {
        return  axios.get(`https://api.themoviedb.org/3/movie/${query.id}?api_key=5033c761b29137a4b26a100f295b65c8&language=en-US`)
    }
    const getVid = ()=> {
        return  axios.get(`https://api.themoviedb.org/3/movie/${query.id}/videos?api_key=5033c761b29137a4b26a100f295b65c8&language=en-US`)
    }
    const getCredits = ()=> {
        return  axios.get(`https://api.themoviedb.org/3/movie/${query.id}/credits?api_key=5033c761b29137a4b26a100f295b65c8`)
    }

    // https://api.themoviedb.org/3/movie/475303/credits?api_key=5033c761b29137a4b26a100f295b65c8
    const res = await axios.all([getData(),getVid(),getCredits()])
        .then(axios.spread((data, vid,credits)=> {
            return {resData : data.data , resVid : vid.data , resCredit:credits.data }
        })).catch(err =>{ console.log(err) })
    // const res = await axios.get(`https://api.themoviedb.org/3/movie/${query.id}?api_key=5033c761b29137a4b26a100f295b65c8&language=en-US`)
     return{data: res.resData , vid : res.resVid ,credits:res.resCredit}
}

export default Movie