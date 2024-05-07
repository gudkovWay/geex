import { Box } from "@mui/system"
import { AdsProps } from "./type"

const UIAds: React.FC<AdsProps> = ({ id, image }) => {
  return (
    <Box sx={{maxWidth: '370px'}}>
      <img src={image} alt={image} style={{borderRadius: '20px'}} />
    </Box>
  )
}

export default UIAds
