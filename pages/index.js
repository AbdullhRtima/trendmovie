import Head from 'next/head'
import axios from 'axios';

const Home = (props) => (
    <div>
     <h1>movies List</h1>
       {props.res.map((movie,i)=> (
        <ul key={movie.id}>
          <li>
              {movie.title}
          </li>
        </ul>
     ))}
    </div>
  )
Home.getInitialProps = async ctx => {
    const res = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=5033c761b29137a4b26a100f295b65c8')
    return{res :res.data.results}
  }
export default Home
