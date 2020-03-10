import{MovieDetials ,Container} from './styles/Movie'
import StarRatings from 'react-star-ratings'
import YouTube from '@u-wave/react-youtube';

function SingleMovie({movie ,vid}) {
    const trailer = vid.slice(0,1)[0];
    console.log(trailer)
    return (
        <Container>
        <MovieDetials>
            <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} alt="single_movie"/>
            <div className="movie_details">
              <h1>{movie.original_title}</h1>
              <div className="info">
                    <span className="info_data" >{movie.release_date}</span>
                    <div>
                        <StarRatings
                                className="info_star"
                                rating={movie.vote_average/2}
                                starDimension="1.8rem"
                                starSpacing=".2rem"
                                starRatedColor="yellow"
                                />
                            <span className="info_rate">{movie.vote_average/2}/5</span>
                        </div>
                    </div>
                        <div>
                         {movie.genres.map((genre ,i )=> (
                             <span className="genre">{genre.name}</span>
                           ))}
                        </div>
                
              <p>{movie.overview}</p>
                 {/* <Link href={`https://www.youtube.com/watch?v=${trailer.key}`} >
                              <a>Play Trailer</a>
                      </Link> */}
            </div>
          </MovieDetials>
            <YouTube 
             className="youtube"
              width="600"
              height="400"
              video={`${trailer.key}`}
            />
        </Container>
    )
}
export default SingleMovie;