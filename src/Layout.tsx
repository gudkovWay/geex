import { Outlet } from "react-router-dom"
import { ModalProvider } from "./context/Auth"

const Layout = () => {
  return (
    <ModalProvider>
      <Outlet />
    </ModalProvider>
  )
}

export default Layout
