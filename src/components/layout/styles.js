import {
    makeStyles
} from '@material-ui/core/styles';
import React from 'react';
const useStyles = makeStyles({
    root: {
        display: 'flex',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
    },
    divider: {
        height: '100%',
        width: '1px',
        backgroundColor: '#7ebaff',
        opacity:'.5'
    },
    content:{
        flex:1,
        overflowY:'auto',
        backgroundColor:'#fff'
    },
    waitParent:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        top:0,
        left:0,
        width:'100%',
        height:'100vh'
    }
});

export default useStyles;