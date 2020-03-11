import Link from 'next/link'
import{MovieDetials ,Container} from './styles/Movie'
import StarRatings from 'react-star-ratings'
import YouTube from '@u-wave/react-youtube';

function SingleMovie({movie ,vid ,credit}) {
    const trailer = vid.slice(0,1)[0];
    const cast = credit.cast.slice(0,9);
    return (
        <Container>
        <MovieDetials>
            <img className="movie-poster"
             src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} 
             alt="single_movie"/>
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
                
              <div className="cast">
               {cast.map((data,i)=> (
                        <img key={data.id} className="img" src={`https://image.tmdb.org/t/p/w300/${data.profile_path}`} alt="cast"/>
               ))}  
                </div>        
                <Link href="/">
                        <span>
                            <a>
                                <button className="back-btn">
                                <img className="back-icon" src="/return.png" /> back
                                </button>
                            </a>
                        </span>
                </Link>
            </div>
          </MovieDetials>
          <div>
                <h1 className="breaker"><span> 
                     <img className="breaker-icon" src="/clapperboard.png" />
                       </span>Watch Trailer<span> 
               </span> </h1>
            </div>
            <YouTube 
             className="youtube"
              width="600"
              height="400"
              video={`${trailer.key}`}
            />
             <div>
                <h1 className="breaker"><span> 
                     <img className="breaker-icon" src="/clapperboard.png" />
                       </span> Similar Movies<span> 
               </span> </h1>
            </div>
            <div>
                <h1 className="breaker"><span> 
                     <img className="breaker-icon" src="/clapperboard.png" />
                       </span>Recommended<span> 
               </span> </h1>
            </div>
        </Container>
    )
}
export default SingleMovie;