import { CardContent, ImageList, ImageListItem, Stack, Typography } from "@mui/material"
import { bull } from "../../utils/bull"
import { CardContentProps } from "./type"

const UICardContent: React.FC<CardContentProps> = ({ community, date, title, description, images }) => (
    <CardContent sx={{ padding: 0 }}>
      <Stack display="flex" direction="column" alignItems="flex-start" justifyContent="center" gap='12px' maxHeight={56}>
        <Typography variant="subtitle1" sx={{ color: 'primary.dark' }}>
          {community} {bull} {date}
        </Typography>
        <Typography variant="h3" sx={{ color: 'primary.contrastText' }}>
          {title}
        </Typography>
      </Stack>
      <Typography variant="body2" sx={{ color: 'primary.light', marginTop: '20px' }}>
        {description.length >= 182 ? description.slice(0, 170) + '...' : description}
        {description.length > 180 && (
          <Typography component='span' variant="body1" sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText', marginLeft: '2px' }}>
            Читать больше
          </Typography>
        )}
      </Typography>
      <ImageList cols={3} gap={12} sx={{ columnGap: '10px !important' }}>
        {images.map((image: string) => (
          <ImageListItem key={image} sx={{ borderRadius: '14px' }}>
            <img
              src={`${image}?w=232&h=200`}
              alt={image}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </CardContent>
  )
export default UICardContent
