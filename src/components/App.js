import React from 'react'
import Layout from './layout/layout.js'
import Home from '../pages/home/Home.js'
import TweetByHashtag from '../pages/tweetsByHashtag/TweetByHashtag.js'
import TweetsByUser from '../pages/tweetsByUser/TweetsByUser.js'
import {BrowserRouter as Router,Route,Routes,Redirect} from 'react-router-dom'
import Posts from '../pages/posts.js'
import PostDetail from '../pages/PostDetail.js'
import P404 from '../pages/404/P404.js'
import AuthPage from '../pages/auth/AuthPge.js'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TweetProvider } from '../context/TweetContext.js'
import { LayoutProvider} from '../context/LayoutContext.js'

const App=()=>{
    return <div>
        <LayoutProvider>

   <TweetProvider>
   <Routes>
          <Route  path={'/login'} element={<AuthPage isPrivate={false}></AuthPage>}></Route>
          <Route  path={'/'} element={<Layout isPrivate={true} element={<Home></Home>}></Layout>}></Route>
          <Route path={'/user/:id/:name'} element={<Layout isPrivate={true} element={<TweetsByUser></TweetsByUser>}></Layout>}></Route>
          <Route path={'/hashtag/:hashtag'} element={<Layout isPrivate={true} element={<TweetByHashtag></TweetByHashtag>}></Layout>}></Route>
          <Route path={'*'} element={<P404></P404>}></Route>
      </Routes>
      <ToastContainer />
   </TweetProvider>
        </LayoutProvider>
    </div>
}

export const IsLogin=()=>!!localStorage.getItem('x-auth-token');

export const GotoLogin=()=>{
    // console.log(props.history.go('/login'));
   //props.history.push('/login');
  //  <Navigate to={'/login'}/>
  //navigate('/login');
  window.history.pushState({}, undefined, "/login");
  return <AuthPage></AuthPage>  
}
// const PublicRoute=({element,...props})=>{
//   return <Route {...props} render={(props)=>{
//     if (IsLogin())
//     return <Redirect to={'/'}></Redirect>
//     else{
//       return React.createElement(element,props)
//     }
//   }}></Route>
// }
// const PrivateRoute=({element,...props})=>{
//   return <Route {...props} render={(props)=>{
//     if (!IsLogin())
//     return <Redirect to={'/login'}></Redirect>
//     else{
//       return React.createElement(element,props)
//     }
//   }}></Route>
// }

export default App;