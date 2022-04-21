import { makeStyles} from '@material-ui/core/styles';
import React from 'react';


const useStyle=makeStyles(theme=>({
root:{
    backgroundColor:'#e6e6e6',
},
header:{
padding:17,
backgroundColor:'#fff',
display:'flex',
alignItems:'center'
},
headerTitle:{
    fontSize:'1.1rem',
    fontWeight:600,
    marginRight:'.5rem'
},
Divider:{
    backgroundColor:'#vebaff !important',
    opacity:'.4'
},
newTweet:{
    padding:17,
backgroundColor:'#fff',
display:'flex',
flexDirection:'column'
},
tweetItem:{
    marginTop:'.5rem',
    padding:17,
backgroundColor:'#fff',
display:'flex',
flexDirection:'column'
},
input:{
    marginRight:'1rem',
    border:'0',
    outline:0,
    flex:1,
    height:125
},
userImg:{
    width:60,
    height:60,
    borderRadius:'50%'
},
imageTweet:{
    color:'#d92c2c',
    border:'1px solid #3337',
    padding:7,
    marginLeft:'1rem'
},
likeTweet:{
    color:'#d92c2c',
    border:'1px solid #3337',
    padding:7,
    marginLeft:'1rem'
},
reTweet:{
    color:'#8d8d8d',
    border:'1px solid #3337',
    padding:7,
    marginLeft:'1rem',
    fontWeight:'600'
},
countLikes:{
marginLeft:'.75rem',
color:'#8d8d8d'
},
tweetBtn:{
    backgroundColor:'#71beff',
    color:'#fff',
    padding:'6px 30px !important',
    borderRadius:'22px'
},
twitterName:{
    fontWeight:600,
    fontSize:'1.1rem',
    marginRight:'1.2rem'
},
twitterId:{
    fontSize:'.75rem',
    color:theme.palette.text.hint,
    marginRight:'.8rem',
    paddingTop:'5px !important'
},
tweetText:{
    marginTop:'.8rem',
    marginBottom:'.8rem',
    marginRight:'3rem',
    textAlign:'justify',
    lineHeight:1.8,
    wordWrap:'break-word'
},
tweetImage:{
    width:'10rem',
    height:'10rem',
    marginTop:'1rem',
    backgroundSize:'contain',
    backgroundRepeat:'no-repeat'

}
}));

 export default useStyle;


