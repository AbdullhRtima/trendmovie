import Head from 'next/head'
import MovieCard from '../components/MovieCard'
import axios from 'axios';

const Home = (props) => {
  const movies = props.res 
  const topTen = movies.slice(0,10)
  return( 
    <div>
       <MovieCard topTen={topTen}/>
    </div>
    )}
Home.getInitialProps = async ctx => {
    const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=5033c761b29137a4b26a100f295b65c8&language=en-US&page=1')
    return{res :res.data.results}
}
export default Home
