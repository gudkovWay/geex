import { useMediaQuery } from "@mui/material"
import Header from "../../components/Header"
import Hero from "../../components/Hero"
import UISlider from "../../elements/Slider"

const HomePage = () => {
  const isMobile = useMediaQuery("(min-width: 950px)")
  
  return (
    <>
      <Header isActive="/" />
      <main>
        {!isMobile && <UISlider /> }
        <Hero />
      </main>
    </>
  )
}

export default HomePage
