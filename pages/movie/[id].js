import { useRouter } from 'next/router';
import axios from 'axios'

function Movie(props) {
const router = useRouter();
const movie = props.res;
    return (
        <div>
             <h1>movies</h1>
             <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt="single_movie"/>
             <p style={{color:"red"}}>{movie.overview}</p>
        </div>
    )
}
Movie.getInitialProps = async ({query}) => {
    // console.log(query)
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${query.id}?api_key=5033c761b29137a4b26a100f295b65c8&language=en-US`)
    return{res :res.data}
}

export default Movie