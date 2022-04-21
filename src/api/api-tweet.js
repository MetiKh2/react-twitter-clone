import { getAxiosInstanceApi, getAxiosInstanceJsonServer } from "./api";

export const getAllTweets=(callback)=>{
    getAxiosInstanceApi().post("getAllTweet")
    .then(res=>{
       callback(true,res.data)
    }).catch(err=>{
        callback(false,err)
    });
}
export const getTweetsByHashTagRequest=(hashTag,callback)=>{
    getAxiosInstanceApi().post("getAllTweet",{"hashTag":hashTag})
    .then(res=>{
       callback(true,res.data)
    }).catch(err=>{
        callback(false,err)
    });
}
export const getTweetsByUserRequest=(user,callback)=>{
    getAxiosInstanceApi().post("getAllTweet",{"user":user})
    .then(res=>{
       callback(true,res.data)
    }).catch(err=>{
        callback(false,err)
    });
}
export const getHashTags=(callback)=>{
    getAxiosInstanceApi().get("getallhashtags")
    .then(res=>{
       callback(true,res.data)
    }).catch(err=>{
        callback(false,err)
    });
}
export const getTwitters=(callback)=>{
    getAxiosInstanceApi().get("getAllUser")
    .then(res=>{
       callback(true,res.data)
    }).catch(err=>{
        callback(false,err)
    });
}
export const newTweet=(data,callback)=>{
    getAxiosInstanceApi().post("newTweet",data)
    .then(res=>{
    callback(true,res.data)
    }).catch(err=>{
      callback(false,err)
    });
}
export const likeTweetRequest=(id,callback)=>{
    getAxiosInstanceApi().get("likeTweet/"+id)
    .then(res=>{
    callback(true,res.data)
    }).catch(err=>{
      callback(false,err)
    });
}