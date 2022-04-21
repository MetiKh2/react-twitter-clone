import { makeStyles} from '@material-ui/core/styles';
import React from 'react';
import theme from '../theme';
const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fff',
        width: '18%',
        padding: '1.5rem 1rem',
        overflowY:'auto',
        [theme.breakpoints.down('sm')]:{
            width:'100%'
        }
    },
    logoType: {
        fontSize: '1.25rem',
        fontWeight: '600',
        marginRight: '1rem',
        color: theme.palette.primary.main
    },
    hashtagTitle: {
        fontSize: '1.1rem',
        fontWeight: '600',
        marginTop: '3rem',
        marginBottom: '1.5rem'
    },
    hashTag: {
        marginRight: '.8rem',
        fontSize:'.85rem',
    },
    hashtagParent: {
        marginBottom:'.5rem',
        padding:'.15rem !important',
        width:'100%'
    }
}));

export default useStyles;