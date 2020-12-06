import { useEffect, useState } from 'react';



function Search(){
    const [ search, setsearch ] = useState(null);
    const handleChange= (e) =>{
        setsearch(e.target.value)
        console.log(search)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        fetch('https://pokeapi.co/api/v2/pokemon/'+search)
        .then(response => response.json())
        .then(response => console.log(response))
    }

    return(
        <div className='search_area'>
            <form className='search_form' onSubmit={handleSubmit}>
                <input placeholder='Search your favorite pokemon...' onChange={handleChange} name='search_term'/>
            </form>
        </div>
    )
}

export default Search