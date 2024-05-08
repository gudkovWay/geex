import { useMediaQuery } from "@mui/material"

import { useAuthModal } from "../../context/Auth"
import { useMenu } from "../../context/Menu"

import Header from "../../components/Header"
import Hero from "../../components/Hero"
import UISlider from "../../elements/Slider"
import AuthModal from "../../elements/AuthModal"
import Menu from "../../elements/Menu"

const HomePage = () => {
  const { isAuthOpen } = useAuthModal()
  const { isMenuOpen } = useMenu()
  const isMobile = useMediaQuery("(min-width: 950px)")
  
  return (
    <>
      <Header isActive="/" />
      <main>
        {!isMobile && <UISlider /> }
        <Hero />
      </main>
      {isAuthOpen && <AuthModal /> }
      {isMenuOpen && <Menu />}
    </>
  )
}

export default HomePage
