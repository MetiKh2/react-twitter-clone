import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
const useStyles = makeStyles(theme=>({
  root:{
    backgroundColor:'#fff',
    width:'25%',
    padding:'1rem 1.5rem',
    overflowY:'auto',
    [theme.breakpoints.down('sm')]:{
      width:'100%'
    }
  },
  twitterImg:{
    width:60,
    height:60,
    borderRadius:'50%'
  },
  infoButtonBase:{
    width:'100%',
    cursor:'pointer'
  },
  profileName:{
    fontWeight:600,
    marginLeft:'1rem',
    fontSize:'1.2rem',
    flex:1,
    direction:'ltr'
  },
  profileId:{
    flex:1,
    color:theme.palette.text.hint,
    fontSize:'.8rem'
  },
  twitterName:{
    fontWeight:600,
    fontSize:'1.2rem',
    flex:1,
    direction:'ltr'
  },
  twitterId:{
    flex:1,
    color:theme.palette.text.hint,
    fontSize:'.8rem'
  },
  twitterRoot:{
    backgroundColor:'#f5f8fa',
    marginTop:'3rem',
    borderRadius:'1.5rem',
    padding:'11px 24px',
  },
  twitterTitle:{
    fontSize:'1.18rem',
    fontWeight:600,
    marginBottom:'.5rem'
  },
  twitterItem:{
    padding:'.85rem 0',
    // borderTop:'1px solid #eee',

  }
  }));

  export default useStyles;