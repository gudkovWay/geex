import { useMediaQuery } from "@mui/material"

import Header from "../../components/Header"
import Hero from "../../components/Hero"
import AuthModal from "../../elements/AuthModal"
import UISlider from "../../elements/Slider"
import { useAuthModal } from "../../context/Auth"

const HomePage = () => {
  const { isAuthOpen } = useAuthModal()
  const isMobile = useMediaQuery("(min-width: 950px)")
  
  return (
    <>
      <Header isActive="/" />
      <main>
        {!isMobile && <UISlider /> }
        <Hero />
      </main>
      {isAuthOpen && <AuthModal /> }
    </>
  )
}

export default HomePage
