import { Box, Container, Skeleton, Stack } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import Ads from "../../elements/Ads"

import CardItem from "../../elements/CardItem"
import { CardItemProps } from "../../elements/CardItem/type"

const Hero = () => {
  const { isPending, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      axios
        .get('posts.json')
        .then(res => res.data),
  })

  if (isPending) return <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />

  return (
    <Container maxWidth="xl" disableGutters>
      <Stack display="flex" sx={{ flexDirection: ["column", "column", "column", "row", "row"], alignItems: ["center", "center", "flex-start"], justifyContent: "space-between", gap: "24px" }}>
        <Box sx={{maxWidth: ["350px", "350px", "100%", "100%", "100%"]}}>
          {data.slice(0,2).map((post: CardItemProps) => (
            <CardItem
              key={post.id}
              id={post.id}
              community={post.community}
              date={post.date}
              title={post.title}
              description={post.description}
              images={post.images}
              watched={post.watched}
              comments={post.comments}
            />
          ))}
        </Box>
        <Ads />
      </Stack>
    </Container>
  )
}

export default Hero
