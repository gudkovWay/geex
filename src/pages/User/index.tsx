import { useAuthModal } from "../../context/Auth"
import { useMenu } from "../../context/Menu"

import Header from "../../components/Header"
import Profile from "../../components/Profile"
import AuthModal from "../../elements/AuthModal"
import Menu from "../../elements/Menu"

const UserPage = () => {
  const { isAuthOpen } = useAuthModal()
  const { isMenuOpen } = useMenu()

  return (
    <>
      <Header isActive="/" />
      <main>
        <Profile />
      </main>
      {isAuthOpen && <AuthModal />}
      {isMenuOpen && <Menu />}
    </>
  )
}

export default UserPage
