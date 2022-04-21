import React from "react";

var LayoutStateContext = React.createContext();
var LayoutDispatchContext = React.createContext();

function LayoutReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_DRAWER":
      return {...state, drawerOpen:!state.drawerOpen};
    case "TOGGLE_LEFT_DRAWER":
      return {...state, leftDrawerOpen:!state.leftDrawerOpen};
     default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function LayoutProvider({children}) {
  var [state, dispatch] = React.useReducer(LayoutReducer, {
    drawerOpen:false,
    leftDrawerOpen:false
  });
  return (
    <LayoutStateContext.Provider value={state}>
      <LayoutDispatchContext.Provider value={dispatch}>
        {children}
      </LayoutDispatchContext.Provider>
    </LayoutStateContext.Provider>
  );
}

function useLayoutState() {
  var context = React.useContext(LayoutStateContext);
  if (context === undefined) {
    throw new Error("useLayoutState must be used within a LayoutProvider");
  }
  return context;
}

function useLayoutDispatch() {
  var context = React.useContext(LayoutDispatchContext);
  if (context === undefined) {
    throw new Error("useLayoutDispatch must be used within a LayoutProvider");
  }
  return context;
}

export {toggleLeftLayoutDrawer,toggleLayoutDrawer,LayoutProvider, useLayoutState, useLayoutDispatch};

// ###########################################################
 
function toggleLayoutDrawer(dispatch) {
    dispatch({
        type:"TOGGLE_DRAWER",
    })
  }
function toggleLeftLayoutDrawer(dispatch) {
    dispatch({
        type:"TOGGLE_LEFT_DRAWER",
    })
  }