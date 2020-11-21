import React from 'react'

import { NavBar, LinksBar, Background } from './style'

function Nav() {
    return (
        <>
            <NavBar>
                <LinksBar href="/">HOME</LinksBar>
                <LinksBar href="/">MENU</LinksBar>
                <LinksBar href="/">ABOUT</LinksBar>
                <LinksBar href="/">CONTATO</LinksBar>
            </NavBar>
        </>
    )
}

export default Nav