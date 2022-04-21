import { Grid, Typography,ButtonBase } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import useStyles from './style.js'
import {Link} from 'react-router-dom'
import axios from 'axios';
import { getHashTags } from '../../api/api-tweet.js';

const hashTags=[];
//'پرچم_دار_جدید','کرونا_ویروس','سامسونگ','هلو_سامر'

const RightSideBar=()=>{
    const [hashTags, setHashTags] = useState([])
    const classes=useStyles();
    useEffect(()=>{
       getHashTags((isOk,dataOrError)=>{
        if(!isOk) return console.log(dataOrError.message)
        else setHashTags(dataOrError)
       });
    },[]);
    return   <div className={classes.root}>
          <Link to={'/'}><Grid container alignItems={'center'}>
      
        <Grid item>
         <img src={"/images/logo.png"}/>
         </Grid>
         <Grid item>
         <Typography className={classes.logoType}>توییتر فارسی</Typography>
         </Grid>
       
        </Grid>
        </Link>
        <Typography className={classes.hashtagTitle}>داغ ترین هشتگ ها</Typography>
        <Grid container direction={'column'} alignItems={'center'}>
            {
                hashTags.map(item=>{
                  return <Link to={'/hashtag/'+item.text} style={{width:'100%'}}><ButtonBase className={classes.hashtagParent}>
                    <Grid container item alignItems={'center'} >
                        <img src={"/images/hashtag.png"}/>
                        <Typography className={classes.hashTag}>
                           {item.text}
                        </Typography>
                    </Grid>
                    </ButtonBase>
                    </Link> 
                })
            }
        </Grid>
    </div>
}

export default RightSideBar;