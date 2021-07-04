import { types } from "../types/types"

//**************************************************************************

const toggleTheme = () => {
    return {
        type: types.toggleTheme,
        payload: null
    }
}

const toggleBurgerMenuState = () => {
    return {
        type: types.toggleBurgerMenu,
        payload: null
    }
}

const setBurgerMenuState = ( state ) => {
    return {
        type: types.setBurgerMenuState,
        payload: {
            state
        }
    }
}

const setHeaderHeight = ( height ) => {
    return {
        type: types.setHeaderHeight,
        payload: {
            height
        }
    }
}

//**************************************************************************

export {
    toggleTheme,
    toggleBurgerMenuState,
    setBurgerMenuState,
    setHeaderHeight
}