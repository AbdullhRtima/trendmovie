import axios from 'axios'
import SingleMovie from '../../components/SingleMovie'

function Movie(props) {
    const movie = props.data;
    const vid = props.vid.results;
    const credit= props.credits;
    const similar = props.similar.results;
    const recommendations = props.recommendations.results;
    // console.log(recommendations);
    // console.log(similar);
        return (
            <>
                <SingleMovie
                    similar={similar}
                    recommendations={recommendations}
                    movie={movie}
                    vid={vid}
                    credit={credit}/>
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
    const getCredits = ()=> {
        return  axios.get(`https://api.themoviedb.org/3/movie/${query.id}/credits?api_key=5033c761b29137a4b26a100f295b65c8`)
    }

    const getSimilar = ()=> {
        return  axios.get(`https://api.themoviedb.org/3/movie/${query.id}/similar?api_key=5033c761b29137a4b26a100f295b65c8&language=en-US&page=1`)
    }
    const getRecommended = ()=> {
        return  axios.get(`https://api.themoviedb.org/3/movie/${query.id}/recommendations?api_key=5033c761b29137a4b26a100f295b65c8&language=en-US&page=1`)
    }
    const res = await axios.all([getData(),getVid(),getCredits(),getSimilar(),getRecommended()])
        .then(axios.spread((data, vid,credits,similer,recommendations)=> {
            return {resData : data.data ,
                  resVid : vid.data ,
                  resCredit:credits.data ,
                  resSimiler:similer.data ,
                  resRec:recommendations.data
                }
        })).catch(err =>{ console.log(err) })

     return{data: res.resData ,
            vid : res.resVid ,
            credits:res.resCredit,
            similar:res.resSimiler,
            recommendations:res.resRec
        }
}

export default Movie