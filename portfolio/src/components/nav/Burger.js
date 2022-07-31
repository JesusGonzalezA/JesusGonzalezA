import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { toggleBurgerMenuState } from '../../actions/ui';

import { StyledBurger } from '../../styles/components/Header/Nav/Burger';

//**************************************************************************

export const Burger = () => {

    const { isBurgerMenuOpened } = useSelector( state => state.ui )
    const dispatch = useDispatch()

    const toggleMenu = () => {
        dispatch( toggleBurgerMenuState() )
    }

    return (
        <StyledBurger aria-label='switch options menu' onClick={ toggleMenu } open={ isBurgerMenuOpened }>
            <div />
            <div />
            <div />
        </StyledBurger>
    )
}

//**************************************************************************
