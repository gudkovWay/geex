import { CardContent, ImageList, ImageListItem, Stack, Typography, useMediaQuery } from "@mui/material"
import { bull } from "../../utils/bull"
import { CardContentProps } from "./type"

const UICardContent: React.FC<CardContentProps> = ({ community, date, title, description, images }) => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <CardContent sx={{ padding: 0, display: 'flex', flexDirection: ['column-reverse', 'column-reverse', 'column'] }}>
      {isMobile && (
        <Typography variant="body2" sx={{ color: 'primary.light', marginTop: '20px' }}>
          {description.length >= 182 ? description.slice(0, 170) + '...' : description}
          {description.length > 180 && (
            <Typography component='span' variant="body1" sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText', marginLeft: '2px' }}>
              Читать больше
            </Typography>
          )}
        </Typography>
      )}
      <Stack sx={{ flexDirection: ['column-reverse', 'column-reverse', 'column'], alignItems: "flex-start", justifyContent: "center", gap: '12px', maxHeight: '56px' }}>
        <Typography variant="subtitle1" sx={{ color: 'primary.dark' }}>
          {community} {bull} {date}
        </Typography>
        <Typography variant="h3" sx={{ color: 'primary.contrastText' }}>
          {title}
        </Typography>
      </Stack>
      {!isMobile && (
        <Typography variant="body2" sx={{ color: 'primary.light', marginTop: '20px' }}>
          {description.length >= 182 ? description.slice(0, 170) + '...' : description}
          {description.length > 180 && (
            <Typography component='span' variant="body1" sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText', marginLeft: '2px' }}>
              Читать больше
            </Typography>
          )}
        </Typography>
      )}
      <ImageList cols={3} gap={12} sx={{ columnGap: '10px !important' }}>
        {!isMobile ? images.map((image: string) => (
          <ImageListItem key={image} sx={{ borderRadius: '14px' }}>
            <img
              src={`${image}?w=232&h=200`}
              alt={image}
            />
          </ImageListItem>
        )) :
          <img src={`${images[0]}?w303&h=240`} alt={images[0]} style={{width: '300px', height: '240px', borderRadius:'14px'}}/>
        }
      </ImageList>
    </CardContent>
  )
}
export default UICardContent
