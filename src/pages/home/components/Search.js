import React, { useEffect, useState } from 'react'

const Search = () => {
    const [Query, setQuery] = useState()

    useEffect(() => {
        if(!Query) return
        console.log(Query);
    }, [Query]);
    return (
        <div>
            <input value={Query} onChange={e=>setQuery(e.target.value)}/>
        </div>
    )
}

export default Search
