import { useState } from "react"
import { Hamburger, NavDrawer, NavItem } from "@fluentui/react-nav-preview"
import {pages} from "../router/routes"
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const openBtn = <Hamburger onClick={()=> setIsOpen(!isOpen)}/>

  return (
    <>
     {!isOpen && openBtn}
    <NavDrawer open={true}>
     {openBtn}
     {pages.map((page)=>(<NavItem href={page.path} value={page.path}>{page.display}</NavItem>))}
    </NavDrawer>
    </>
  )
}

export default Navbar