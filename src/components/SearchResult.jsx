import pokeball from './assets/pokeball.png';
import { useEffect, useState } from 'react'

function SearchResult({ result }){
    // const [result, setResult] = useState(null)

    // useEffect(()=>{
    //     setResult(search)
    //     console.log(result)
    // }, [])

    if (result == null){
        return(
            <div className='pokeball-img'>
                {/* <h2>
                    Nothing to show!
                </h2> */}
                <img src={pokeball} />
            </div>
        )
    }
    else{
        return(
            <div>
            <h2>
                {result.name}
            </h2>
            <img src={result.sprites.front_default} width='200px'/>
            </div>
        )
    }
}

export default SearchResult