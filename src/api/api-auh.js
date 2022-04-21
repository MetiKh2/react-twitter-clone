import { getAxiosInstanceApi, getAxiosInstanceAuth } from "./api";

export const loginApi=(user,callback)=>{
    getAxiosInstanceAuth().post("login",user)
    .then(res=>{
       callback(true,res.data)
    }).catch(err=>{
        console.log(err.response);
        callback(false,err.response.data.message)
    });
}
export const registerApi=(newUser,callback)=>{
    getAxiosInstanceAuth().post("register",newUser)
    .then(res=>{
       callback(true,res.data)
    }).catch(err=>{
        console.log(err.response);
        callback(false,err.response.data.message)
    });
}
export const UploadUserAvatr=(avatar,callback)=>{
    //debugger
    getAxiosInstanceApi().post("uploadUserPhoto",avatar)
    .then(res=>{
        console.log(res);
        localStorage.setItem('image',res.data.imagePath)
       callback(true,res.data)
    }).catch(err=>{
        console.log(err.response);
        callback(false,err.response.data.message)
    });
}
export const GetProfileRequest=(callback)=>{
    getAxiosInstanceApi().get("getProfile")
    .then(res=>{
       callback(true,res.data)
    }).catch(err=>{
        console.log(err)
        callback(false,err.response)
    });
}