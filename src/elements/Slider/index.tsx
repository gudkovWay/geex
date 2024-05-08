import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import Slider from "react-slick"
import { Box, Card, CardContent, CardMedia, Container, Skeleton, Stack, Typography } from "@mui/material"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { CardContentProps } from "../CardItem/type"
import { bull } from "../../utils/bull"

const settings = {
  arrows: false,
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '5%'
}

const UISlider = () => {
  const { isPending, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      axios
        .get('posts.json')
        .then(res => res.data),
  })
  if (isPending) return <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />

  return (
    <section>
      <Container maxWidth="xl" disableGutters sx={{ maxWidth: '350px', marginTop: '16px' }}>
        <Slider {...settings}>
          {data.slice(1, 3).map((post: CardContentProps) => (
            <Card
              sx={{ width: '320px', height: '287px', boxShadow: '0', borderRadius: '18.42px', position: 'relative', overflowX: 'hidden' }}
              key={post.title}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="287"
                image={post.images[0]}
                sx={{ borderRadius: '18.42px', position: 'absolute', top: 0, left: 0, zIndex: 55 }}
              />
              <CardContent sx={{ height: '287px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '0' }}>
                <Stack direction="row" sx={{ padding: '12px', gap: '10px', maxWidth: '280px', overflowX: 'hidden' }}>
                  {post.tags && post.tags.map((tag: string, index: number) => (
                    <Box key={tag} sx={{ height: '34px', borderRadius: '100px', padding: '0 14px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 555, backgroundColor: 'rgba(255,255,255,0.15)' }}>
                      <Typography variant="body1" sx={{ color: '#f1f3f7' }}>
                        {`${index === 2 ? `+${post.tags!.length - 2}` : `#${tag}`}`}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
                <Stack direction="column" sx={{ padding: '12px', gap: '10px', maxWidth: '280px', overflowX: 'hidden', position: 'relative', zIndex: '555' }}>
                  <Typography variant="h3" sx={{ color: 'primary.main' }}>
                    {post.title.slice(0, 39) + '...'}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: '#f1f3f7' }}>
                    {post.community} {bull} {post.date}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Slider>
      </Container>
    </section>
  )
}

export default UISlider
