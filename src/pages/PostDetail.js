import React from 'react'
import { useParams } from "react-router-dom";

const PostDetail = (e) => {
    const {pId}=useParams();
    console.log(e);
    return (
        <div>
            detail {pId}
        </div>
    )
}

export default PostDetail
