import React from 'react'
import Tweet from './Tweet.js'

const TweetList = ({tweets}) => {

  return <div>
      {
      tweets.map(item=>{
        return <Tweet data={item}></Tweet>
      })
      }
  </div>
}

export default TweetList