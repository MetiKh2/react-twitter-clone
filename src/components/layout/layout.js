import React,{useEffect,useState} from 'react'
import useStyles from './styles.js'
import LeftSideBar from '../leftSideBar/leftSideBar.js'
import RightSideBar from '../rightSideBar/rightSideBar.js'
import { CircularProgress, Divider,useMediaQuery} from '@material-ui/core'
import { useTheme} from '@material-ui/styles'
import { Route, Routes,useNavigate  } from 'react-router-dom'
import P404 from '../../pages/404/P404.js'
import PostDetail from '../../pages/PostDetail.js'
import TweetByHashtag from '../../pages/tweetsByHashtag/TweetByHashtag.js'
import TweetsByUser from '../../pages/tweetsByUser/TweetsByUser.js'
import Home from '../../pages/home/Home.js'
import AuthPage from '../../pages/auth/AuthPge.js'
import { GotoLogin, IsLogin} from '../App.js';
import { GetProfileRequest } from '../../api/api-auh.js'
import { toast } from 'react-toastify'
import TwitterDrawer from './TwitterDrawer.js'
import LeftTwitterDrawer from './LeftTwitterDrawer.js'
 
const Layout=(props)=>{
    const classes=useStyles();
    const navigate=useNavigate();
    const theme=useTheme()
     const isTabletSize=useMediaQuery(theme.breakpoints.down('sm'));
    const [wait,setWait]=useState(true);
    useEffect(()=>{
        
        GetProfileRequest((isOk,data)=>{
            if(!isOk){toast.error(data)
                localStorage.clear();
                GotoLogin()
            }
            else{
                console.log(data);
                 
                setWait(false)
                localStorage.setItem('name',data.name);
                localStorage.setItem('username',data.username);
                localStorage.setItem('image',data.image);
                localStorage.setItem('x-auth-token',data['x-auth-token']);
            }
        }) 
       },[])

   if(props.isPrivate&&!IsLogin())return GotoLogin()
  
    if(wait) return <div className={classes.waitParent}>
        <CircularProgress></CircularProgress>
        شکیبا باشید
        </div>
        else
    return <div className={classes.root}>
      {isTabletSize? <TwitterDrawer></TwitterDrawer>:<RightSideBar></RightSideBar>}
       <Divider orientation={"vertical"} className={classes.divider}></Divider>
        <div  className={classes.content}>  
        {props.element}
        </div>
        <Divider orientation={"vertical"} className={classes.divider}></Divider>
      {isTabletSize? <LeftTwitterDrawer></LeftTwitterDrawer>:<LeftSideBar></LeftSideBar>}
    </div>
}

export default Layout;