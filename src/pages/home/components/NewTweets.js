import { Button, Grid, IconButton, InputBase,Typography } from '@material-ui/core'
import React, { useState } from 'react'
import useStyle from '../style'
import ImageIcon from '@material-ui/icons/Image';
import classnames from 'classnames'
import axios from 'axios';
import { newTweet } from '../../../api/api-tweet';
import { toast } from 'react-toastify';
 import {setTweetText as setTweet, useTweetDispatch, useTweetState} from '../../../context/TweetContext.js'
const NewTweets = ({UpdateTweets}) => {

    //  const [tweet,setTweet]=useState();
    const {tweetText:tweet}=useTweetState()
    const tweetDispatch=useTweetDispatch()
     const [imageFile,setImageFile]=useState();
     const [imagePath,setImagePath]=useState();

    const changeTweetText=(e)=>{
        setTweet(tweetDispatch,e.target.value);
    }

     const newTweetClick=()=>{
         //if(!tweet) return;
         const data= {
            "text":tweet 
        };
        const formdata=new FormData();
        formdata.append('text',tweet);
        if(imageFile)
        formdata.append('image',imageFile);
     newTweet(formdata,(isOk)=>{
         if(isOk) toast.success('توییت با موفقیت ثبت شد')
         else toast.error('خطایی به وجود آمده است')
         UpdateTweets()
     })
       setTweet(tweetDispatch,'');
       setImagePath()
       setImageFile()
     }

    const inputFile =React.useRef();
    // React.useEffect(()=>{
    //     input.current.addEventListener("input",(e)=>{
    //         setTweet({__html:e.target.innerText});
    //     },false);
    // });


    const classes=useStyle()

    const GetImg=()=>{
        if (localStorage.getItem("image") && localStorage.getItem("image") !== 'undefined')
         return localStorage.getItem("image");
        return '/images/user-profiles.png'
    }
    const selectImage=()=>{
        inputFile.current.click();
    }
    const ChangeImage=(e)=>{
        if(e.target.files&&e.target.files.length>0){
            setImageFile(e.target.files[0])
            const reader=new FileReader();
            reader.onload=(e)=>{
                setImagePath(e.target.result)
            }
            reader.readAsDataURL(e.target.files[0])
            console.log(imagePath);
        }
    }

    return (
        <div className={classes.newTweet}>
            <Grid container>
        <img className={classes.userImg} src={GetImg()}/>
            <textarea onChange={changeTweetText} value={tweet} placeholder="توییت کن ..." className={classes.input} >
            </textarea>
            <input onChange={ChangeImage} ref={inputFile} type={'file'} style={{display:'none'}}/>
            </Grid>
            {
                imagePath&&
                <div>
                <div style={{backgroundImage:`url(${imagePath})`}} className={classes.tweetImage}></div>
            </div>
            }
        
            <Grid container justifyContent={'flex-end'} style={{marginTop:'1.6rem'}}>
            <IconButton onClick={selectImage} className={classes.imageTweet} aria-label="upload picture" component="span">
          <ImageIcon />
        </IconButton>
        <Button onClick={newTweetClick} className={classes.tweetBtn} variant="contained" color={'primary'}>
            <Typography>توییت</Typography>
            </Button>
            </Grid>
        </div>
    )
}

export default NewTweets
