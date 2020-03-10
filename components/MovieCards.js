import {MCard ,Poster,Details,Rating,Tags,Info ,Container} from './styles/MCard'
import StarRatings from 'react-star-ratings'
function MovieCards({topTen}) {
    return (
        <Container>
            {topTen.map((movie,i)=> (
              <MCard key={movie.id}>
                       <Poster>
                           <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt="movie-image" alt="movie-img"/>
                       </Poster>
                       <Details>
                           {console.log(movie)}
                           <h1>{movie.title}</h1>
                           <span>{movie.release_date}</span>
                       <Rating>
                              <StarRatings
                                rating={movie.vote_average/2}
                                starDimension="2rem"
                                starSpacing=".2rem"
                              />
                               <span>{movie.vote_average/2}</span>
                        </Rating>
                            {/* <Info>
                                <p>{movie.overview.substring(0,100)}</p>
                           </Info> */}
                       </Details>
                        
                  </MCard>
                ))}
        </Container>
    )
}
export default  MovieCards ;