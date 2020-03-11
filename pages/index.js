import Head from 'next/head'
import MovieCard from '../components/MovieCard'
import {api} from '../Util/api'
import axios from 'axios';

const Home = (props) => {
  const movies = props.res 
  const topTen = movies.slice(0,10)
  return( 
    <div>
       <MovieCard key={topTen.id} topTen={topTen}/>
    </div>
    )}
// this is get the movies and put theme in the props of Home 
Home.getInitialProps = async ctx => {
    const res = await axios.get(api()).catch(err=> {console.log(err)});
    return{res :res.data.results}
}
export default Home
