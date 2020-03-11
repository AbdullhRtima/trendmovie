import axios from 'axios'
import {apiQuery} from '../../Util/api'
import SingleMovie from '../../components/SingleMovie'

function Movie(props) {
    const movie = props.data;
    const vid = props.vid.results;
    const credit= props.credits;
    const similar = props.similar.results;
    const recommendations = props.recommendations.results;
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
// there we get the data and put theme into the props of Movie compoents 
// get the movie by id
// get the trailer 
// get the similere movies 
// get the recommendend movies 

Movie.getInitialProps = async ({query}) => {
    const getData = ()=> {
        return  axios.get(apiQuery(`${query.id}?api_key=5033c761b29137a4b26a100f295b65c8&language=en-US`))
    }
    const getVid = ()=> {
        return  axios.get(apiQuery(`${query.id}/videos?api_key=5033c761b29137a4b26a100f295b65c8&language=en-US`))
    }
    const getCredits = ()=> {
        return  axios.get(apiQuery(`${query.id}/credits?api_key=5033c761b29137a4b26a100f295b65c8`))
    }

    const getSimilar = ()=> {
        return  axios.get(apiQuery(`${query.id}/similar?api_key=5033c761b29137a4b26a100f295b65c8&language=en-US&page=1`))
    }
    const getRecommended = ()=> {
        return  axios.get(apiQuery(`${query.id}/recommendations?api_key=5033c761b29137a4b26a100f295b65c8&language=en-US&page=1`))
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