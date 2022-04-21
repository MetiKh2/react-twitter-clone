import axios from 'axios'

export const getAxiosInstanceJsonServer=()=>{
   return axios.create({
        baseURL:"http://localhost:3000",
        headers:{
                API_Key:"lkwedfhflkjsdcclkfdlkjfdgkljdlkfgjlkdfkljdfkjdfjkdflkgdgdf"
        }
    });
}
export const getAxiosInstanceAuth=()=>{
   return axios.create({
        baseURL:"https://twitterapi.liara.run/api/",
    });

}
export const getAxiosInstanceApi=()=>{
   return axios.create({
        baseURL:"https://twitterapi.liara.run/api/",
        headers:{
            "x-auth-token":localStorage.getItem('x-auth-token'),
           // "Content-Type":"multipart/form-data"
        }
    });
}