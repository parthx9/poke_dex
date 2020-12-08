import { useEffect, useState } from 'react';

function Search( { handleSubmit, handleChange } ){

    return(
        <div className='search_area'>
            <form className='search_form' onSubmit={handleSubmit}>
                <input placeholder='Search your favorite pokemon...' onChange={handleChange} name='search_term'/>
            </form>
        </div>
    )
}

export default Search