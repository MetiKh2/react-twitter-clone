import React from 'react'
import { Link } from 'react-router-dom'

const posts = () => {
    return (
        <div>
            <div>
                <Link to={'/post/1'}>پست 1</Link>
                <p>تو اینجا ...</p>
            </div>
            <div>
                <Link to={'/post/2'}>پست 2</Link>
                <p>تو اینجا ...</p>
            </div>
            <div>
                <Link to={'/post/3'}>پست 3</Link>
                <p>تو اینجا ...</p>
            </div>
            <div>
                <Link to={'/post/4'}>پست 4</Link>
                <p>تو اینجا ...</p>
            </div>
            <div>
                <Link to={'/post/5'}>پست 5</Link>
                <p>تو اینجا ...</p>
            </div>
        </div>
    )
}

export default posts
