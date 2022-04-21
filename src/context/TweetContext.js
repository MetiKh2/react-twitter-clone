import React from "react";

var TweetStateContext = React.createContext();
var TweetDispatchContext = React.createContext();

function TweetReducer(state, action) {
  switch (action.type) {
    case "SET_TWEET_TEXT":
      return {...state, tweetText: action.payload};
    case "SET_TWEET_LIST":
      return {...state, tweetList: action.payload};
   
    case "SET_RETWEET_TEXT":
      return {...state, tweetText: action.payload};
    case "LIKE_TWEET":
     {
       const tweetId=action.payload;
     const tweetIndex= state.tweetList.findIndex(item=>item._id===tweetId)
    if(tweetIndex===-1)
    return state;
     return {...state, tweetList:[...state.tweetList.slice(0,tweetIndex),{...state.tweetList[tweetIndex],likes:state.tweetList[tweetIndex].likes+1},...state.tweetList.slice(tweetIndex+1)]};
      }
     default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function TweetProvider({children}) {
  var [state, dispatch] = React.useReducer(TweetReducer, {
    tweetText: '',
    tweetList:[]
  });
  return (
    <TweetStateContext.Provider value={state}>
      <TweetDispatchContext.Provider value={dispatch}>
        {children}
      </TweetDispatchContext.Provider>
    </TweetStateContext.Provider>
  );
}

function useTweetState() {
  var context = React.useContext(TweetStateContext);
  if (context === undefined) {
    throw new Error("useLayoutState must be used within a LayoutProvider");
  }
  return context;
}

function useTweetDispatch() {
  var context = React.useContext(TweetDispatchContext);
  if (context === undefined) {
    throw new Error("useLayoutDispatch must be used within a LayoutProvider");
  }
  return context;
}

export {likeTweet,setTweetList,TweetProvider, useTweetState, useTweetDispatch,setTweetText,setReTweetText};

// ###########################################################
 
function setTweetText(dispatch,tweetText) {
    dispatch({
        type:"SET_TWEET_TEXT",
        payload:tweetText
    })
  }
function setReTweetText(dispatch,tweetText) {
    dispatch({
        type:"SET_RETWEET_TEXT",
        payload:tweetText
    })
  }
function likeTweet(dispatch,id) {
    dispatch({
        type:"LIKE_TWEET",
        payload:id
    })
  }
function setTweetList(dispatch,list) {
    dispatch({
        type:"SET_TWEET_LIST",
        payload:list
    })
  }