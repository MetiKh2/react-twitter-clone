import { Button, Grid, IconButton, Typography } from '@material-ui/core';
import React from 'react'
import useStyle from '../style'
import {likeTweetRequest} from '../../../api/api-tweet.js'
import ImageIcon from '@material-ui/icons/Image';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RepeatIcon from '@material-ui/icons/Repeat';
import { likeTweet, setReTweetText, useTweetDispatch, useTweetState } from '../../../context/TweetContext';
import { toast } from 'react-toastify';
const Tweet = ({data}) => {

  const renderTweet=(text)=>{
    return {__html: text.replace(/#\S+/g,`<a href='/tags/$&' style='color:skyBlue '>$&</a>`)};
    // return text.replace("#<span style='color:blue;'>#صبحانه</span>",'صبحانه آبی');
  }
  const tweetDispatch=useTweetDispatch()
    const classes=useStyle();
    const ReTweet=()=>{
      setReTweetText(tweetDispatch,data.text)
    }
    const HandleLike=()=>{
      likeTweetRequest(data._id,(isOk,data)=>{
        if(!isOk) return toast.error(data)
      likeTweet(tweetDispatch,data._id)
      })
    }
    return (
        <div className={classes.tweetItem}>
            <Grid container alignItems={'centder'}>
        <img className={classes.userImg} src={data.user.image}/>
      <Typography className={classes.twitterName}>{data.user.name}  </Typography>
        <Typography  className={classes.twitterId}> {data.user.id}</Typography>
            </Grid>
            <Typography dangerouslySetInnerHTML={renderTweet(data.text)} className={classes.tweetText} component={'p'}>
       </Typography>
       {
                data.image&&
                <div>
                <div style={{backgroundImage:`url(${data.image})`}} className={classes.tweetImage}></div>
            </div>
            }
            <Grid container alignItems={'center'} justifyContent={'flex-end'} style={{marginTop:'1.6rem'}}>
         <Typography className={classes.countLikes}>{data.likes}</Typography>
            <IconButton onClick={HandleLike} className={classes.likeTweet} aria-label="upload picture" component="span">
          <FavoriteIcon />
        </IconButton>
            <IconButton className={classes.reTweet} onClick={ReTweet} aria-label="upload picture" component="span">
          <RepeatIcon />
        </IconButton>
        
            </Grid>
        </div>
    )
}

export default Tweet
