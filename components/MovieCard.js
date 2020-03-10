import Link from 'next/link'
import {Card ,MovieHeader,MovieCards} from './styles/Card'

export default function MovieCard({topTen}) {
    return (
        <>
         {topTen.map((movie,i)=> (
            <MovieCards key={movie.id}>
              <li>
              <Card>
                <div className="info_section">
                        <MovieHeader>
                          <img className="locandina" src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt="movie-image"/>
                               <div>
                                   <h1>{movie.title}</h1>
                                   <span>{movie.release_date}</span>
                                   <span> </span>
                                   <p>{movie.overview.substring(0,100)}
                                      <Link href="/movie/[id]" as={`/movie/${movie.id}`} >
                                        <span>
                                          <a>  showmore...</a>
                                        </span>
                                      </Link>
                                     </p>
                               </div>
                        </MovieHeader>
                    </div>
                    <img className="blur_back" src={`https://image.tmdb.org/t/p/w185/${movie.backdrop_path}`} alt="movie-image"/>
              </Card>
              </li>
            </MovieCards>
        ))}
        </>
    )
}
