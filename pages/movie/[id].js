import { useRouter } from 'next/router';
import axios from 'axios'
import SingleMovie from '../../components/SingleMovie'
function Movie(props) {
const router = useRouter();
const movie = props.data;
const vid = props.vid.results;
// console.log(movie)
// console.log(vid)
    return (
        <>
            <SingleMovie movie={movie} vid={vid} />
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
    const res = await axios.all([getData(),getVid()])
        .then(axios.spread((data, vid)=> {
            return {resData : data.data , resVid : vid.data }
        }))
    // const res = await axios.get(`https://api.themoviedb.org/3/movie/${query.id}?api_key=5033c761b29137a4b26a100f295b65c8&language=en-US`)
     return{data: res.resData , vid : res.resVid}
}

export default Movie