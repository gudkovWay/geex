import { Modal } from "@mui/material"

import { useAuthModal } from "../../context/Auth"
import UIForm from "./Form";


const AuthModal = () => {
  const { isAuthOpen, closeAuthModal } = useAuthModal()

  return (
    <Modal
      open={isAuthOpen}
      onClose={closeAuthModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <UIForm />
    </Modal>
  )
}

export default AuthModal
