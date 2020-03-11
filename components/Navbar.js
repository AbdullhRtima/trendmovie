import React from 'react'
import {Nav} from './styles/Nav'
import Link from 'next/link'
// simple nav bar diplay at every page 
function Navbar() {
    return (
        <Nav>
             <Link href='/' >
               <img src="/logo.png" alt="logo"/>
              </Link>
            <Link href="/">
                <h1>Moviedb</h1>
            </Link>
           
        </Nav>
    )
}
export default Navbar;