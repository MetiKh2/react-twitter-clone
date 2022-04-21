import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import { Divider, Typography ,useMediaQuery,IconButton} from '@material-ui/core';
import useStyle from '../../pages/home/style';
import { useTheme} from '@material-ui/styles'
 
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import {useLayoutState,useLayoutDispatch,toggleLayoutDrawer, toggleLeftLayoutDrawer} from '../../context/LayoutContext.js'

const Header = ({title,icon}) => {
    const theme=useTheme();
    const isTabletSize=useMediaQuery(theme.breakpoints.down('sm'));
    const classes=useStyle();
    const {drawerOpen}=useLayoutState();
    const layoutDispatch=useLayoutDispatch();
    return (
        <div className={classes.header}>
            {isTabletSize&&<IconButton onClick={()=>toggleLayoutDrawer(layoutDispatch)}><MenuRoundedIcon></MenuRoundedIcon></IconButton>}
           {icon}
            <Typography className={classes.headerTitle}> {title}</Typography>
            {isTabletSize&&<IconButton style={{marginRight:"auto"}} onClick={()=>toggleLeftLayoutDrawer(layoutDispatch)}><MenuRoundedIcon></MenuRoundedIcon></IconButton>}
            </div>
    )
}

export default Header
