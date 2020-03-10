import Link from 'next/link'
import {Card ,MovieHeader,MovieCards} from './styles/Card'
import StarRatings from 'react-star-ratings'

export default function MovieCard({topTen}) {
    return (
        <>
         {topTen.map((movie,i)=> (
            <MovieCards key={movie.id}>
              <li>
              <Card>
                <div className="info_section">
                        <MovieHeader>
                          <img className="movie-img" src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt="movie-image"/>
                               <div>
                               <h1>{movie.title}</h1>
                                  <div className="info">
                                  <span className="info_data" >{movie.release_date}</span>
                                    <StarRatings
                                        className="info_star"
                                        rating={movie.vote_average/2}
                                        starDimension="2rem"
                                        starSpacing=".2rem"
                                        starRatedColor="yellow"
                                      />
                                     <span className="info_rate">{movie.vote_average/2}/5</span>
                                  </div>
                                     <p>{movie.overview.substring(0,100)}
                                      <Link href="/movie/[id]" as={`/movie/${movie.id}`} >
                                        <span>
                                          <a> showmore...</a>
                                        </span>
                                      </Link>
                                     </p>
                               </div>
                        </MovieHeader>
                    </div>
                    <img className="blur_back" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.backdrop_path}`} alt="movie-image"/>
              </Card>
              </li>
            </MovieCards>
        ))}
        </>
    )
}
