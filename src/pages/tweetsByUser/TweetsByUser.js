import { Divider,Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header.js';
import NewTweets from '../home/components/NewTweets.js';
import TweetList from '../home/components/TweetList.js';
import useStyle from '../home/style.js'
import PersonIcon from '@material-ui/icons/Person';
import { useParams } from 'react-router';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { getTweetsByUserRequest } from '../../api/api-tweet.js';


const TweetsByUser = () => {
    const location=useLocation();
    const {id}=useParams();
    const {name}=useParams();
  const [tweets, setTweets] = useState([])
    const classes=useStyle();
    useEffect(()=>{
        getTweetsByUserRequest(id,(isOk,dataOrError)=>{
            if(!isOk) return alert(dataOrError.message)
            else setTweets(dataOrError)
        });
    },[location]);
    return (
        <div className={classes.root}>
             <Header title={name} icon={<PersonIcon></PersonIcon>}></Header>
            <Divider className={classes.Divider}></Divider>
            {/* <NewTweets></NewTweets> */}
            {
                tweets.length===0&&
                <Typography>این کاربر تا به حال توییتی ثبت نکرده است</Typography>
            }
            <TweetList tweets={tweets}></TweetList>
            <TweetList tweets={tweets}></TweetList>
        </div>
    )
}

export default TweetsByUser;
