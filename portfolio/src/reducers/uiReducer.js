import { types } from "../types/types";

//**************************************************************************

const initialState = {
    dark: false,
    isBurgerMenuOpened: false,
    headerHeight: 0
}

//**************************************************************************

export const uiReducer = ( state = initialState, action ) => {
    switch ( action.type ) { 
        case types.toggleTheme:
            return {
                ...state,
                dark: !state.dark
            }
        case types.toggleBurgerMenu: 
            return {
                ...state,
                isBurgerMenuOpened: !state.isBurgerMenuOpened
            }

        case types.setBurgerMenuState:
            return {
                ...state,
                isBurgerMenuOpened: action.payload.state
            }
        
        case types.setHeaderHeight:
            return {
                ...state,
                headerHeight: action.payload.height
            }

        default:
            return state;
    }
}

//**************************************************************************
