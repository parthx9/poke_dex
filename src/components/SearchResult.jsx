import pokeball from './assets/pokeball.png';

const renderPokemon = (item) => {
    return(
        <div className='poke-card'>
        <h1 className='name'>
            {item.name}
        </h1>
        <img src={item.sprites.front_default} width='200px'/>
        <img src={item.sprites.back_default} width='200px'/>
        <div className='details'>
            <p className='height'>
                Height: {item.height + 'm'}
            </p>
            <p className='weight'>
                Weight: {item.weight + 'kg'}
            </p>
            <p className='base-experience'>
                Base Experience: {item.base_experience}
            </p>
        </div>
        </div>
    )
}

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
            renderPokemon(result)
        )
    }
}

export default SearchResult