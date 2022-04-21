import { Divider } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getTweetsByHashTagRequest } from '../../api/api-tweet.js';
import Header from '../../components/header/Header.js';
import NewTweets from '../home/components/NewTweets.js';
import TweetList from '../home/components/TweetList.js';
import useStyle from '../home/style.js'
import {toast} from 'react-toastify'
import {useTweetState,useTweetDispatch,setTweetList as setTweets} from '../../context/TweetContext.js'
import {useLocation} from 'react-router-dom'


const TweetByHashtag = () => {
    const {hashtag}=useParams();
    const location=useLocation();
    const {tweetList:tweets}=useTweetState()
    const tweetDispatch=useTweetDispatch()
    const classes=useStyle();
    useEffect(()=>{
        getTweetsByHashTagRequest(hashtag,(isOk,dataOrError)=>{
            if(!isOk) return toast.error(dataOrError.message)
            else setTweets(tweetDispatch,dataOrError)
        });
    },[location]);
    return (
        <div className={classes.root}>
             <Header title={hashtag} icon={<img src={'/images/hashtag.png'}/>}></Header>
            <Divider className={classes.Divider}></Divider>
            {/* <NewTweets></NewTweets> */}
            <TweetList tweets={tweets}></TweetList>
            <TweetList tweets={tweets}></TweetList>
        </div>
    )
}

export default TweetByHashtag
