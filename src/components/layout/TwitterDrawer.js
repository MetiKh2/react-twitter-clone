import { Drawer } from '@material-ui/core'
import React from 'react'
import RigthSideBar from '../rightSideBar/rightSideBar.js'
import {useLayoutState,useLayoutDispatch,toggleLayoutDrawer} from '../../context/LayoutContext.js'

const TwitterDrawer = () => {
    const {drawerOpen}=useLayoutState();
    const layoutDispatch=useLayoutDispatch();
    return (
        <Drawer anchor={'right'} open={drawerOpen}  onClose={()=>{toggleLayoutDrawer(layoutDispatch)}}>
            <RigthSideBar></RigthSideBar>
        </Drawer>
    )
}

export default TwitterDrawer
