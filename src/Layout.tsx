import { Outlet } from "react-router-dom"
import { ModalProvider } from "./context/Auth"
import { MenuProvider } from "./context/Menu"

const Layout = () => {
  return (
    <MenuProvider>
      <ModalProvider>
        <Outlet />
      </ModalProvider>
    </MenuProvider>
  )
}

export default Layout
