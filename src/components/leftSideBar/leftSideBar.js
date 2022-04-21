import React, { useEffect, useRef, useState } from 'react'
import useStyles from './style.js'
import { Grid, Typography,ButtonBase,Divider,Menu,MenuItem ,useMediaQuery} from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getTwitters } from '../../api/api-tweet.js';
import { toast } from 'react-toastify';
import { UploadUserAvatr } from '../../api/api-auh.js';
import { useTheme } from '@material-ui/styles';

export const Twitter=({twitterName,twitterId,imageSrc})=>{
    const classes=useStyles();
    const theme=useTheme();
    const isTabletSize=useMediaQuery(theme.breakpoints.down('sm'))
    const GetTwitterImg=()=>{
        if (imageSrc)
         return imageSrc
        return '/images/user-profiles.png'
    }
    return     <Link to={"/user/"+twitterId+'/'+twitterName}> <ButtonBase style={{width:'100%'}}>
     
        <Grid item container alignItems={'center'} className={classes.twitterItem}>
    <img src={GetTwitterImg()} className={classes.twitterImg}/>
    <Grid alignItems={'flex-start'} item container direction={'column'} style={{width:'max-content' ,marginRight:'1rem'}}>
            <Typography className={classes.twitterName}>
           {twitterName}
            </Typography>
            <Typography className={classes.twitterId}>
            @{twitterId}
            </Typography>
        </Grid>
    </Grid> 
    
    </ButtonBase></Link>
}
 
const LaftSideBar=()=>{
    const [twitters, setTwitters] = useState([])
    const [anchorMenu, setAnchorMenu] = useState()
    const [imageFile, setImageFile] = useState()
    const [imagePath, setImagePath] = useState()
    const inputRef=useRef();
    const classes=useStyles();
    useEffect(()=>{
        getTwitters((isOk,dataOrError)=>{
            if(!isOk) return console.log(dataOrError.message)
            else setTwitters(dataOrError)
           });
    },[]);
    const HandleToggleMenu=(e)=>{
        if(anchorMenu)setAnchorMenu(null)
        else setAnchorMenu(e.currentTarget)
    }
    const LogOutUser=()=>{
        localStorage.clear()
        window.location.reload()
    }
    const GetImg=()=>{
        if(imagePath)
        return imagePath;
        if (localStorage.getItem("image") && localStorage.getItem("image") !== 'undefined')
         return localStorage.getItem("image");
        return '/images/user-profiles.png'
    }
    const HandleAvatarChange=(e)=>{
        //debugger
        if(e.target.files&&e.target.files.length>0)
        {
            //debugger
        setImageFile(e.target.files[0]);
        
        const reader=new FileReader();
        reader.onload=(e)=>{
            setImagePath(e.target.result)
        }
        reader.readAsDataURL(e.target.files[0])

        const formData=new FormData();
        formData.append('image',e.target.files[0])
        UploadUserAvatr(formData,(isOk,data)=>{
           // debugger
            if(!isOk) return toast.error(data)
            else return toast.success('تصویر با موفقیت آپلود شد')
        })
    }
    }
return  <div className={classes.root}>
    <ButtonBase onClick={HandleToggleMenu} className={classes.infoButtonBase}>
    <Grid container direction={'row'} alignItems={'center'} justifyContent={'flex-end'}>
    <Grid item container direction={'column'} style={{width:'max-content'}}>
            <Typography className={classes.profileName}>
             {localStorage.getItem('name')}
            </Typography>
            <Typography className={classes.profileId}>
            {localStorage.getItem('username')}
            </Typography>
        </Grid>
        <img className={classes.twitterImg} src={GetImg()}/>
        <input onChange={HandleAvatarChange} ref={inputRef} type={'file'} style={{display:'none'}}/>
    </Grid>
    </ButtonBase>
    <Grid className={classes.twitterRoot} item conteier direction={'column'}>
    <Typography className={classes.twitterTitle}>بهترین خبرنگاران</Typography>
     {
    twitters.map(item=>{
        return <React.Fragment>
            <Divider></Divider> 
           
            <Twitter twitterName={item.name} twitterId={item._id} imageSrc={item.image}>
            </Twitter>
            
            </React.Fragment> 
    })
    }
   </Grid>
 
      <Menu
        id="basic-menu"
        anchorEl={anchorMenu}
        open={Boolean(anchorMenu)}
        onClose={()=>setAnchorMenu(null)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        <MenuItem onClick={LogOutUser}>خروج</MenuItem>
        <MenuItem onClick={()=>{
            inputRef.current.click()
        }}>ویرایش عکس پرئفایل</MenuItem>
      </Menu>
</div>    
}

export default LaftSideBar;

