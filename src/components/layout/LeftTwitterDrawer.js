import { Drawer } from '@material-ui/core';
import React from 'react'
import { useLayoutDispatch, useLayoutState,toggleLeftLayoutDrawer } from '../../context/LayoutContext';
import LeftSideBar  from '../leftSideBar/leftSideBar.js';

const LeftTwitterDrawer = () => {
    const {leftDrawerOpen}=useLayoutState();
    const layoutDispatch=useLayoutDispatch();
    return (
        <Drawer anchor={'left'} open={leftDrawerOpen}  onClose={()=>{toggleLeftLayoutDrawer(layoutDispatch)}}>
            <LeftSideBar></LeftSideBar>
        </Drawer>
    )
}

export default LeftTwitterDrawer
