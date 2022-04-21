import { Button, Input, Paper, Tab, Tabs, Typography } from '@material-ui/core'
import { Home } from '@material-ui/icons';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { loginApi, registerApi } from '../../api/api-auh.js';
import { GotoLogin, IsLogin } from '../../components/App.js';
import Layout from '../../components/layout/layout.js';
import useStyle from './style.js'
const loginTabValue=1;
const registerTabValue=2;
const AuthPge = (props) => {
    const classes=useStyle();
    const [tab,setTab]=useState(1);
    //login state
    const [userNameLogin, setuserNameLogin] = useState()
    const [passwordLogin, setpasswordLogin] = useState()
    //register state
    const [userNameRegister, setuserNameRegister] = useState()
    const [passwordRegister, setpasswordRegister] = useState()
    const [rePasswordRegister, setrePasswordRegister] = useState()
    const [fullNameRegister, setfullNameRegister] = useState()

    //auth
    if(props.isPrivate&&!IsLogin())return GotoLogin()

    const HandleLogin=()=>{
        const user={
            username:userNameLogin,
            password:passwordLogin
        }
      const error= validateLogin(user)
      if(error) return toast.warn(error)
      loginApi(user,(isOk,res)=>{
        if(!isOk) return toast.error(res)
        else{
            localStorage.setItem('name',res.name);
            localStorage.setItem('username',res.username);
            localStorage.setItem('image',res.image);
            localStorage.setItem('x-auth-token',res['x-auth-token']);
            toast.success('شما با موفقیت وارد شدید')
            window.history.pushState({}, undefined, "/");
            return window.location.reload()
    }
      })
    }
    const HandleRegister=()=>{
        const newUser={
            username:userNameRegister,
            password:passwordRegister,
            name:fullNameRegister,
            rePasswordRegister:rePasswordRegister
        }
      const error= validateRegister(newUser)
      if(error) return toast.warn(error)
      newUser.rePasswordRegister=undefined;
      registerApi(newUser,(isOk,res)=>{
        if(!isOk) return toast.error(res)
        else{
           localStorage.setItem('name',res.name);
           localStorage.setItem('username',res.username);
           localStorage.setItem('x-auth-token',res['x-auth-token']);
           toast.success('شما با موفقیت ثبت نام شدید')
           window.history.pushState({}, undefined, "/");
           return window.location.reload()
    }
      })
    }

    const validateLogin=(user)=>{
        if(!user.username)
        return 'لطفا نام کاربری را وارد کنید';
        if(!user.password)
        return 'لطفا رمز عبور را وارد کنید';
    }
    const validateRegister=(newUser)=>{
        if(!newUser.name)
        return 'لطفا نام کامل خود را وارد کنید';
        if(!newUser.username)
        return 'لطفا نام کاربری را وارد کنید';
        if(!newUser.password)
        return 'لطفا رمز عبور را وارد کنید';
        if(!newUser.rePasswordRegister)
        return 'لطفا تکرار رمز عبور را وارد کنید';
        if(newUser.password!==newUser.rePasswordRegister)
        return 'رمز ها با هم مغایرت دارند';
    }
    
    const handleChangeTab=(e,newTab)=>{
        setTab(newTab);
    }    


    return (
        
        <Paper className={classes.root}>
            <Typography className={classes.headerText}>
                به توییتر ما خوش آمدید
            </Typography>
            <Tabs value={tab} onChange={handleChangeTab} centered>
            <Tab className={classes.tab} value={loginTabValue} label="ورود" />
            <Tab className={classes.tab} value={registerTabValue} label="ثبت نام" />
            </Tabs>
            {tab===loginTabValue&&
            <div className={classes.containerInput}>
                <Typography>نام کاربری</Typography>
                <Input value={userNameLogin} onChange={e=>setuserNameLogin(e.target.value)} className={'uni-m-b-small'}></Input>
                <Typography>رمز عبور</Typography>
                <Input value={passwordLogin} onChange={e=>setpasswordLogin(e.target.value)} className={'uni-m-b-small'}></Input>
                <Button onClick={HandleLogin} variant={'contained'}>ورود</Button>
            </div>
            } 
            {tab===registerTabValue&&
            <div className={classes.containerInput}>
                 <Typography>نام کامل</Typography>
                <Input value={fullNameRegister} onChange={e=>setfullNameRegister(e.target.value)} className={'uni-m-b-small'}></Input>
                 <Typography>نام کاربری</Typography>
                <Input value={userNameRegister} onChange={e=>setuserNameRegister(e.target.value)} className={'uni-m-b-small'}></Input>
                <Typography>رمز عبور</Typography>
                <Input value={passwordRegister} onChange={e=>setpasswordRegister(e.target.value)} className={'uni-m-b-small'}></Input>
                <Typography>تکرار رمز عبور</Typography>
                <Input value={rePasswordRegister} onChange={e=>setrePasswordRegister(e.target.value)} className={'uni-m-b-small'}></Input>
                <Button onClick={HandleRegister} variant={'contained'}>ثبت نام</Button>
            </div>
            }
        </Paper>
    )
}

export default AuthPge
