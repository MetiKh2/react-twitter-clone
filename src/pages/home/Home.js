import { Divider } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header.js';
import NewTweets from './components/NewTweets.js';
import TweetList from './components/TweetList.js';
import useStyle from './style.js'
import HomeIcon from '@material-ui/icons/Home';
import axios from 'axios';
import { getAllTweets } from '../../api/api-tweet.js';
import Search from './components/Search.js';
import { toast } from 'react-toastify';
import { useTweetState,setTweetList as setTweets, useTweetDispatch } from '../../context/TweetContext.js';
import { useTranslation } from 'react-i18next';

 

const Home = () => {

    const{tweetList:tweets}=useTweetState()
    const TweetDispatch=useTweetDispatch()

    const classes=useStyle();
    const {t}=useTranslation();
    useEffect(()=>{
       UpdateTweets()
    },[]);
    const UpdateTweets=()=>{
        getAllTweets((isOk,dataOrError)=>{
            if(!isOk) return console.log(dataOrError.message)
            else setTweets(TweetDispatch,dataOrError)
        });
    }
    return (
        <div className={classes.root}>
            <Header title={t("home")} icon={<HomeIcon/>}></Header>
            <Divider className={classes.Divider}></Divider>
            <NewTweets UpdateTweets={UpdateTweets}></NewTweets>
            <TweetList tweets={tweets}></TweetList>
        </div>
    )
}

export default Home
