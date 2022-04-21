import { makeStyles} from '@material-ui/core/styles';
import React from 'react';


const useStyle=makeStyles(theme=>({
header:{
padding:17,
backgroundColor:'#fff',
display:'flex'
},
headerTitle:{
    fontSize:'1.1rem',
    fontWeight:600,
    marginRight:'.5rem'
},
}));

 export default useStyle;


