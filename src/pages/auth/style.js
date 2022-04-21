import { makeStyles} from '@material-ui/core/styles';
import React from 'react';


const useStyle=makeStyles(theme=>({
root:{
    backgroundColor:'#fff',
    width:'30rem',
    margin:'10rem auto',
    display:'flex',
    flexDirection:'column',
    padding:12
},
headerText:{
    margin:'1rem',
    alignSelf:'center'
},
tab:{
    flex:1,
    fontFamily:'shabnam !important',
    fontSize:13
},
containerInput:{
    padding:'1rem .8rem',
    display:'flex',
    flexDirection:'column'
}
}));

 export default useStyle;


