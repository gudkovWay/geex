import Header from "../../components/Header"
import { useAuthModal } from "../../context/Auth"
import AuthModal from "../../elements/AuthModal"

const UserPage = () => {
  const { isAuthOpen } = useAuthModal()

  return (
    <>
      <Header isActive="/user" />
      {isAuthOpen && <AuthModal />}
    </>
  )
}

export default UserPage
